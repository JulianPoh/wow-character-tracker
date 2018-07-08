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
          <link href="css/style.css"/>
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
