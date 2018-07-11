var React = require("react");

class Logout extends React.Component {
  render() {
  
    const bodyStyle = {
      fontFamily: 'Averia Libre',
      verticalAlign: 'center',
      backgroundImage: "URL('/img/spirit.jpg')",
      backgroundSize: 'cover',
      color: 'gold',
      textShadow: '0 0 5px black'
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
      fontFamily: 'Averia Libre',
      color: 'gold',
      textShadow: '0 0 5px black',
      margin: '0 5px',
      width: '165px',
      height: '50px',
      fontWeight: 'bold',
      backgroundImage: "URL('/img/mist.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom'
    }

    const formStyle = {
      fontSize : '12px'
    }

    const labelStyle = {
      textAlign: 'left'
    }

    const skull = {
      backgroundImage: "URL('/img/skulls.gif')",
      width: '165px',
      height: '50px',
      backgroundSize: 'cover',
      color: 'gold',
      textShadow: '0 0 5px red',
      fontWeight: 'bold'
    }

    const row = {
      display: 'inline-block'
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
            <h2 style={h1Style}> CHARACTER DELETED </h2>
            <a href="/user/userhome"><button style={buttonStyle}>RETURN HOME</button></a>              
            </div>
          
          </body>
        
        </html>
      )
    }
  }

module.exports = Logout;
