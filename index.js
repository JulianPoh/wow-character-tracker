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


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());


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
// CREATE USER                                                                >>
//============================================================================>>
//============================================================================>>
*/

//GET CREATE NEW USER FORM
const newUserForm = (request, response) => {
    response.render('newUser');
};
//CREATE NEW USER
const postUser = (request, response) => {
    let password = sha256( request.body.password );
    let userName = request.body.name;
    let userEmail = request.body.email;
    let userLoc = request.body.location;
    let queryText = 'INSERT INTO users (name, email, password, location) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [userName, userEmail, password, userLoc];
    pool.query(queryText, values, (err, queryResult) => {
        if ( err ){
            response.send('DB error: '+ err.message)
        }else{
            let user_id = queryResult.rows[0].id;
            response.cookie('logged_in', 'true');
            response.cookie('user_id', user_id);
            response.send( "Created New User " + userName )
        }
    });
};


/*
//============================================================================>>
//============================================================================>>
// USER LOGIN & LOGOUT                                                        >>
//============================================================================>>
//============================================================================>>
*/

//<<<< LOGIN FORM >>>>
const userLogin = (request, response) => {
    response.render('login');
};

//<<<< LOGIN FUNCTION >>>>
app.post('/user/login', (request, response) => {
    let queryText = 'SELECT * FROM users WHERE email=$1';
    const values = [request.body.email];
    pool.query(queryText, values, (err, queryResult) => {
        if( err ){
            response.send('DB error: '+ err.message)
        }else{
            const queryRows = queryResult.rows;
            console.log( queryRows );

            if( queryRows.length < 1){
                response.send(401);
            }else{
                let db_pass_hash = queryRows[0].password;
                let request_pass_hash = sha256( request.body.password );
                if( db_pass_hash ===  request_pass_hash ){
                    response.cookie('logged_in', 'true');
                    response.cookie('user_id', queryRows[0].id);
                    response.send("Welcome Player "+queryRows[0].name);
                }else{
                    response.status(401).send('Access Denied');
                }
            }
        }
    });
});


/*
<<============================================================================>>
<<============================================================================>>
<< QUERY ALL CHARACTERS
<<============================================================================>>
<<============================================================================>>
*/
 const getHome = (request, response) => {
  // query database for all characters

  const queryString = 'SELECT * from characters;';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'home', {characters: result.rows} );
    }
  });
}


/*
<<============================================================================>>
<<============================================================================>>
<< CREATE NEW CHARACTER
<<============================================================================>>
<<============================================================================>>
*/
//GET FIND CHARACTER FORM
const getNewChar = (request, response) => {
  response.render('newChar');
}
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
      response.render( 'characters', {characters: result.rows[0]} );
    }
  });
}
//<<<< SAVE NEW CHARACTER >>>>
const postChar = (request, response) => {
  let params = request.body;
  if (request.cookies['logged_in'] === 'true') {
      const queryString = 'INSERT INTO characters(name, allegiance, race, class, image, user_id) VALUES($1, $2, $3, $4, $5, $6,);';
      const values = [params.name, params.allegiance, params.race, params.class, params.image, users]; 
  } else {
      const queryString = 'INSERT INTO characters(id, num, name, image, height, weight) VALUES($1, $2, $3, $4, $5, $6);';
      const values = [params.id, params.num, params.name, params.img, params.height, params.weight]; 
  }
  
  pool.query(queryString, values, (err, result) => {
    if (err) {
      console.log('query error:', err.stack);
    } else {
      console.log('query result:', result);

      // redirect to home page
      response.redirect('/characters');
    }
  });
};


/*
<<============================================================================>>
<<============================================================================>>
<< EDIT CHARACTERS   
<=============================================================================>>
<<============================================================================>>
*/
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
//SAVE EDIT CHARACTER
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
    }
  });
}


/*
<<============================================================================>>
<<============================================================================>>
<< DELETE CHARACTER
<<============================================================================>>
<<============================================================================>>
*/

//<<<< GET FORM >>>>
const deleteCharForm = (request, response) => {
  response.send("COMPLETE ME");
}
//<<<< DELETE FUNCTION >>>>
const deleteChar = (request, response) => {
  response.send("COMPLETE ME");
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
app.get('/user/login', userLogin);

//Character Routes
app.get('/character/edit', editCharForm);
app.get('/character/new', getNewChar);
app.get('/character/:id', getChar);
app.get('/character/:id/delete', deleteCharForm);
app.post('/character', postChar);
app.put('/character/:name', updateChar);
app.delete('/character/:name', deleteChar);


app.listen(3000, () => {console.log('Portal 3000 to Azeroth has been opened.')});