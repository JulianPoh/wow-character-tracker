var React = require("react");

class Login extends React.Component {
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
      textAlign: 'center',
    }

    const h1Style = {
      textAlign: 'center'
    } 

    
      return(
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
              <h3 style={h1Style}>EXISTING USER LOGIN</h3>  
              
              <form action="/user/login" method="POST">
                Email:<br/> 
                <input name="email" type="email"/><br/>
                <br/>
                Password:<br/> 
                <input name="password" type="password"/><br/>
                <br/>
                <input type="submit" value="Login"/><br/>
              </form>

            </div>
          
          </body>
        
        </html>
      )
    }
  }

module.exports = Login;
