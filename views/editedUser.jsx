var React = require("react");

class Logout extends React.Component {
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
      width: '165px',
      height: '38px'
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
            <h2 style={h1Style}> USER DETAILS SAVED </h2>
            <a href="user/userHome"><button style={buttonStyle}>RETURN HOME</button></a>
            </div>
          
          </body>
        
        </html>
      )
    }
  }

module.exports = Logout;
