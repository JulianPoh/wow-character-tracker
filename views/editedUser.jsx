var React = require("react");

class Logout extends React.Component {
  render() {
  
    const bodyStyle = {
      fontFamily: 'Averia Libre',
      verticalAlign: 'center',
      backgroundImage: "URL('/img/wow2.jpg')",
      backgroundSize: 'stretch',
      color: 'gold',
      textShadow: '0 0 5px black'
    }

    const containerStyle = {
      margin: '0 auto',
      textAlign: 'center',
    }

    const logoStyle = {
      maxWidth: '20%',
      textAlign: 'center'
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
      fontSize: '12px',
      margin: '5px'
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
            <h2 style={h1Style}> USER DETAILS SAVED </h2>
            <a href="/user/userhome"><button style={buttonStyle}>RETURN HOME</button></a>
            </div>
          
          </body>
        
        </html>
      )
    }
  }

module.exports = Logout;
