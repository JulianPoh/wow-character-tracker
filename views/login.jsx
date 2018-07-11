var React = require("react");

class Login extends React.Component {
  render() {
  
    const bodyStyle = {
      fontFamily: 'Averia Libre',
      verticalAlign: 'center',
      backgroundImage: "URL('/img/wow1.jpg')",
      backgroundSize: 'cover',
      color: 'gold',
      textShadow: '0 0 5px black'
    }

    const containerStyle = {
      margin: '0 auto',
      textAlign: 'center',
    }

    const logoStyle = {
      maxWidth: '20%',
      textAlign: 'center',
    }

    const h1Style = {
      textAlign: 'center'
    }    
  
    const buttonStyle = {
      fontFamily: 'Averia Libre',
      color: 'gold',
      textShadow: '0 0 5px black',
      margin: '0 5px',
      width: '165px',
      height: '50px',
      fontWeight: 'bold',
      backgroundImage: "URL('/img/flames.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom'
    }

    const formStyle = {
      fontSize : '12px'
    }

    
      return(
        <html>
          
          <head>
          <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
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
                <button type="submit" value="Login" style={buttonStyle}>LOGIN</button><br/>
              </form>

            </div>
          
          </body>
        
        </html>
      )
    }
  }

module.exports = Login;
