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
            </div>
            <br/> 
            <div className='container' style={containerStyle}>  
              <a href="/character/new"><button style={buttonStyle}>ADD NEW CHARACTER</button></a>
              <a href="/character/edit"><button style={buttonStyle}>EDIT EXISTING CHARACTER</button></a>
              <a href="/logout"><button style={buttonStyle}>CURRENT USER LOGOUT</button></a>
            </div>


          
          </body>
        
        </html>
      )
    }
  }

module.exports = Home;
