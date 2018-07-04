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
const db = new pg.Pool(config);

module.exports = db;


/*
//============================================================================>>
//============================================================================>>
// CREATE USER                                                                >>
//============================================================================>>
//============================================================================>>
*/

//<<<< GET CREATE USER FORM >>>>
app.get('/users/new', (request, response) => {
    response.render('Register');
});
//<<<< CREATE USER FUNCTION >>>>
app.post('/users/new', (request, response) => {
    let password = sha256( request.body.password );
    let queryText = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [request.body.name, request.body.email, password];
    pool.query(queryText, values, (err, queryResult) => {
        if ( err ){
            response.send('db error: '+ err.message)
        }else{
            let user_id = queryResult.rows[0].id;
            let userName = queryResult.rows[0].name;
            response.cookie('logged_in', 'true');
            response.cookie('user_id', user_id);
            response.send( "Created New User " + user_id )
        }
    });
});


/*
//============================================================================>>
//============================================================================>>
// USER LOGIN & LOGOUT                                                        >>
//============================================================================>>
//============================================================================>>
*/

//<<<< LOGIN FORM >>>>
app.get('/users/login', (request, response) => {
    response.render('Login');
});
//<<<< LOGIN FUNCTION >>>>
app.post('/users/login', (request, response) => {
    let queryText = 'SELECT * FROM users WHERE email=$1';
    const values = [request.body.email];
    pool.query(queryText, values, (err, queryResult) => {
        if( err ){
            response.send('db error: '+ err.message)
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
                    response.send("Welcome User "+queryRows[0].id);
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
 const getRoot = (request, response) => {
  // query database for all pokemon

  // respond with HTML page displaying all pokemon
  //
  const queryString = 'SELECT * from characters;';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'Home', {characters: result.rows} );
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
//<<<< GET FORM >>>>
const getNew = (request, response) => {
  response.render('newCharacter');
}
//<<<< FIND Character BY ID >>>>
const getCharacters = (request, response) => {
  let id = request.params['id'];
  const queryString = 'SELECT * FROM characters WHERE id = ' + id + ';';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'Character', {characters: result.rows[0]} );
    }
  });
}
//<<<< SAVE NEW CHARACTER >>>>
const postCharacter = (request, response) => {
  let params = request.body;
  if (request.cookies['logged_in'] === 'true') {
      const queryString = 'INSERT INTO characters(id, num, name, image, height, weight, user_id) VALUES($1, $2, $3, $4, $5, $6, $7);';
      const values = [params.id, params.num, params.name, params.img, params.height, params.weight, params.user_id]; 
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
//<<<< GET FORM >>>>
const editCharacterForm = (request, response) => {
  let id = request.params['id'];
  const queryString = 'SELECT * FROM characters WHERE id = ' + id + ';';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'Edit', {characters: result.rows[0]} );
    }
  });
}
//<<<<  EDIT FUNCTION >>>>
const updateCharacter = (request, response) => {
  let id = request.params['id'];
  let char = request.body;
  const queryString = 'UPDATE "characters" SET "name"=($2), "img"=($3), "height"=($4), "weight"=($5) WHERE "id"=($1)';
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
const deleteCharacterForm = (request, response) => {
  response.send("COMPLETE ME");
}
//<<<< DELETE FUNCTION >>>>
const deleteCharacter = (request, response) => {
  response.send("COMPLETE ME");
}


/*
//===============================================================
//===============================================================
// ROUTES
//===============================================================
//===============================================================
*/
app.get('/', );

app.get('/character/edit', editCharacterForm);
app.get('/character/new', getNew);
app.get('/character/:id', getCharacter);
app.get('/character/:id/delete', deleteCharacterForm);
app.get('/hello', (request, response) => {
  response.render('hello');
});

app.post('/pokemon', postCharacter);

app.put('/pokemon/:id', updateCharacter);

app.delete('/pokemon/:id', deleteCharacter);


app.listen(3000, () => {console.log('Portal 3000 to Azeroth has been opened.')});