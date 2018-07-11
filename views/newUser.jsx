var React = require("react");

class NewUser extends React.Component {
  render() {

    const bodyStyle = {
      fontFamily: 'Averia Libre'
    }

    const containerStyle = {
      margin: '0 auto',
      textAlign: 'center',
    }

    const logoStyle = {
      maxWidth: '30%',
      textAlign: 'center'
    }

    const h1Style = {
      textAlign: 'center'
    }    
  
      const buttonStyle = {
      margin: '0 5px',
      width: '165px'
    }


    return (
      <html>
        
        <head>
          <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
          <link rel="stylesheet" type="text/css" href="css/style.css"/>
          </head>
        
        <body style={bodyStyle}>
          
          <div className='container' style={containerStyle}>
            
            <img src="/img/wow-logo.png" style={logoStyle}/>
            <br/>
            <h2>New User Registration</h2>
              
            <form method="POST" action="/user/new">
                Name: <br/>
                <input name="name" type="text" /><br/>
                <br/>
                Email: <br/>
                <input name="email" type="email" /><br/>
                <br/>
                Password:<br/>
                <input name="password" type="password" /><br/>
                <br/>
                Location:<br/>
                <select name="location">
                  <option selected="selected" value="select">Select Location</option>
                  <option value="NACA">North America & Canada</option>
                  <option value="SA">South America</option>
                  <option value="EU">Europe</option>
                  <option value="AS">Asia</option>
                  <option value="AUNZ">Australia & New Zealand</option>
                </select><br/>
                <br/>
                <input type="submit" value="REGISTER" /><br/>
            </form>

          </div>

        </body>
      
      </html>
    );
  }
}

module.exports = NewUser;