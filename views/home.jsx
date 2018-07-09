var React = require("react");

class Home extends React.Component {
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
  
    const buttonStyle = {
      margin: '0 5px',
      width: '165px'
    }

    const formStyle = {
      fontSize : '12px'
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
              <br/>
              <a href="/user/login"><button style={buttonStyle}>EXISTING USER LOGIN</button></a>
              <a href="/user/new"><button style={buttonStyle}>REGISTER NEW USER</button></a>

              <h6>World of Warcraft and its associated images are property of Blizzard Entertainment and are only used here for educational purposes and to tell eveyone how awesome it is.</h6>

            </div>
          
          </body>
        
        </html>
      )
    }
  }

module.exports = Home;
