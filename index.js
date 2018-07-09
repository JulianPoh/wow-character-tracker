/*
//===============================================================
//===============================================================
// CONFIG & SETUP
//===============================================================
//===============================================================
*/
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const pg = require('pg');
const sha256 = require('js-sha256');
const flash = require('connect-flash');
var Alert = require('react-bootstrap/lib/Alert');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(flash());
app.use(express.static('public'));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


/*
//===============================================================
//===============================================================
// INITIALIZE POSTGRES CLIENT
//===============================================================
//===============================================================
*/

const config = {
  user: 'julian',
  host: '127.0.0.1',
  database: 'wow',
  port: 5432,
};


const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('Idle client error', err.message, err.stack);
});

/*
//============================================================================>>
//============================================================================>>
// USERS                                                                >>
//============================================================================>>
//============================================================================>>
*/

//GET HOME PAGE
const getHome = (request, response) => {
    response.render('home');
};



//GET USER CREATION FORM
const newUserForm = (request, response) => {
    response.render('newUser');
};

//CREATE NEW USER
const postNewUser = (request, response) => {
    let password = sha256( request.body.password );
    let userName = request.body.name;
    let userEmail = request.body.email;
    let userLoc = request.body.location;
    let queryText = 'INSERT INTO users (name, email, password, location) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [userName, userEmail, password, userLoc];
    pool.query(queryText, values, (err, queryResult) => {
        if ( err ){
            console.log('Error Creating New User.');
            response.send('DB error: '+ err.message)
        }else{
            let user_id = queryResult.rows[0].id;
            console.log('Creating New User.');
            response.cookie('logged_in', 'true');
            response.cookie('user_id', user_id);
            response.redirect('userHome');
        }
    })
};


//GET USER LOGIN FORM
const userLoginForm = (request, response) => {
    response.render('login');
};

//USER LOGIN FUNCTION
const userLogin = (request, response) => {
    let isLoggedIn = request.cookies.logged_in;
    let currentUserId = request.cookies.user_id;
    if (isLoggedIn === 'true') {
        response.render('userHome');
    } else {
        let queryText = 'SELECT * FROM users WHERE email=$1';
        const values = [request.body.email];
        pool.query(queryText, values, (err, queryResult) => {
            if ( err ) {
                response.send('DB error: '+ err.message)
            } else {
                const queryRows = queryResult.rows;
                console.log( queryRows );
                if ( queryRows.length < 1){
                    response.send(401);
                } else {
                    let db_pass_hash = queryRows[0].password;
                    let request_pass_hash = sha256( request.body.password );
                    if ( db_pass_hash ===  request_pass_hash ){
                        response.cookie('logged_in', 'true');
                        response.cookie('user_id', queryRows[0].id);
                        response.render('userHome');
                    } else {
                        response.status(401).send('Access Denied');
                    }
                }
            }
        })
    }
};


//GET USER HOME PAGE
const userHome = (request, response) => {
    let isLoggedIn = request.cookies.logged_in;
    let currentUserId = request.cookies.user_id;
    if (isLoggedIn === 'true') {
        let queryString;
        let values = [currentUserId];
        if (request.query.sortby == "name") {
            queryString = 'SELECT * FROM characters WHERE users_id = $1 ORDER BY characters.name ASC;'
        } else {
            queryString = 'SELECT * FROM characters WHERE users_id = $1 ORDER BY characters.id ASC;'
        }
        db.query(queryString, values, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
        } else {
            console.log(result.rows);
            let charinfo = result.rows.map( characters => { return {"Name": characters.name, "Race": characters.characters_race, "Class": characters.class, "Faction": characters.faction }; })
            let context = { charinfo: charinfo, cookies: request.cookies };
            response.render('userHome', context);
            }
        });
    } else {
        response.redirect('/');
    }
};

// USER LOGOUT FUNCTION 
const userLogout = (req, response) => {
  response.clearCookie('user_id');
  response.clearCookie('logged_in');
  response.render('logout');
};


//GET EDIT USER FORM
const editUserForm = (request, response) => {
  let userEmail = request.params['email'];
  const queryString = 'SELECT * FROM users WHERE email = ' + userEmail + ';';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'editUser', {users: result.rows[0]} );
    }
  });
}


//SAVE EDITED USER
const updateUser = (request, response) => {
    let id = request.params['id'];
    let userDetails = request.body;
    const queryString = 'UPDATE "users" SET "name"=($2), "email"=($3), "password"=($4), "location"=($5) WHERE "id"=($1)';
    const values = [userDetails.name, userDetails.img, userDetails.height, userDetails.weight, id];
    console.log(queryString);
    pool.query(queryString, values, (err, result) => {
        if (err) {
            console.error('Query error:', err.stack);
        } else {
            console.log('Query result:', result);
            // redirect to home page
            response.render('userHome');
            respond.send('User Details Updated.');
        }
    });
}


//DELETE USER
const deleteUser = (request, response) => {
    let userId = parseInt(request.params.id)
    const queryString = 'DELETE from users WHERE id = $1';
    let values = [userId];
    pool.query(queryString, values, (err, queryResult) => {
        if (err) {
            response.status(500).send('error 9: ' + err.message);
        } else {
        // redirect to home page
        response.redirect('/');
        request.flash('User Deleted');
        }
    });
}


/*
<<============================================================================>>
<<============================================================================>>
<< CHARACTERS
<<============================================================================>>
<<============================================================================>>
*/
//FIND CHARACTER BY NAME
const getChar = (request, response) => {
    let charName = request.params['name'];
    const queryString = 'SELECT * FROM characters WHERE name = ' + charName + ';';
    pool.query(queryString, (err, result) => {
        if (err) {
          console.error('Query error:', err.stack);
        } else {
          console.log('Query result:', result);
          // redirect to home page
          response.render( 'character', {characters: result.rows[0]} );
        }
    });
}

//DISPLAY ALL CHARACTERS OWNED BY USER
const getUserChar = (request, response) => {
    // query database for all characters
    const queryString = 'SELECT * from characters WHERE user_id = ' + user_id + ';';
    pool.query(queryString, (err, result) => {
        if (err) {
          console.error('Query error:', err.stack);
        } else {
          console.log('Query result:', result);

          // redirect to user's home page
          response.render( '/user/home', {characters: result.rows} );
        }
    });
}


//GET CREATE CHARACTER FORM
const getNewCharForm = (request, response) => {
  response.render('newChar');
}


//SAVE NEW CHARACTER
const postNewChar = (request, response) => {
    let params = request.body;
    let currentUser = request.cookies['user_id']
    if (request.cookies['logged_in'] != 'true') {
        response.send("You have to be logged in to create a character.")
    } else { 
        const queryString = 'INSERT INTO characters(name, allegiance, race, gender, class, image, users_id) VALUES($1, $2, $3, $4, $5, $6, $7);';
        const values = [params.name, params.allegiance, params.race, params.gender, params.class, params.image, currentUser]; 
        pool.query(queryString, values, (err, result) => {
            if (err) {
                console.log('query error:', err.stack);
            } else {
                console.log('query result:', result);
                // // redirect to home page
                // response.redirect('/character/new');
                response.send('Created Character: ' + params.name);
            }
        });
    }
};


//GET EDIT CHARACTER FORM
const editCharForm = (request, response) => {
    let id = request.params['id'];
    const queryString = 'SELECT * FROM characters WHERE id = ' + id + ';';
    pool.query(queryString, (err, result) => {
        if (err) {
          console.error('Query error:', err.stack);
        } else {
          console.log('Query result:', result);

          // redirect to home page
          response.render( 'editChar', {characters: result.rows[0]} );
        }
    });
}


//SAVE EDITED CHARACTER
const updateChar = (request, response) => {
    let id = request.params['id'];
    let char = request.body;
    const queryString = 'UPDATE "characters" SET "name"=($2), "race"=($3), "height"=($4), "weight"=($5) WHERE "id"=($1)';
    const values = [char.name, char.img, char.height, char.weight, id];
    console.log(queryString);
    pool.query(queryString, values, (err, result) => {
        if (err) {
          console.error('Query error:', err.stack);
        } else {
          console.log('Query result:', result);

          // redirect to home page
          response.redirect('/');
          response.send('Character Updated');
        }
    });
}


//DELETE CHARACTER FUNCTION
const deleteChar = (request, response) => {
  let charId = parseInt(request.params.id)
  const queryString = 'DELETE from characters WHERE id = $1';
  let values = [charId];
  pool.query(queryString, values, (err, queryResult) => {
    if (err) {
      response.status(500).send('error 9: ' + err.message);
    } else {
      // redirect to home page
      response.redirect('/character');
      response.send('Character Deleted');
    }

  });
}

/*
//===============================================================
//===============================================================
// ROUTES
//===============================================================
//===============================================================
*/
//Home Route
app.get('/', getHome);

//User Routes
app.get('/user/new', newUserForm);
app.post('/user/new', postNewUser);
app.get('/user/login', userLoginForm);
app.post('/user/login', userLogin);
app.get('user/userhome', userHome);
app.delete('/logout', userLogout);
app.get('/user/:id/edit', editUserForm);
app.put('/user/:id/edit', updateUser);
app.delete('/user/:id/edit', deleteUser);

//Character Routes
app.get('/character/new', getNewCharForm);
app.post('/character/new', postNewChar);
app.get('/character/:id', getChar);
app.get('/character/:id/edit', editCharForm);
app.put('/character/:id/edit', updateChar);
app.delete('/character/:id', deleteChar);


app.listen(3000, () => {
    console.log(' ------------------------- ');
    console.log('|        {{{{{}}}}        |');
    console.log('|     {{{         }}}     |');
    console.log('|   {{{   PORTAL    }}}   |');
    console.log('|  {{{     3000      }}}  |');
    console.log('|  {{{      TO       }}}  |');
    console.log('|   {{{   AZEROTH   }}}   |');
    console.log('|     {{{         }}}     |');
    console.log('|        {{{{}}}}}        |');
    console.log(' ------------------------- ');
});