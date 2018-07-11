var React = require("react");

class NewUser extends React.Component {
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


    return (
      <html>
        
        <head>
          <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="css/style.css"/>
          </head>
        
        <body style={bodyStyle}>
          
          <div className='container' style={containerStyle}>
            
            <img src="/img/wow-logo.png" style={logoStyle}/>
            <br/>
            <h2>New User Registration</h2>
              
            <form method="POST" action="/user/new" style={formStyle}>
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
                  <option value="North America & Canada">North America & Canada</option>
                  <option value="South America">South America</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Australia & New Zealand">Australia & New Zealand</option>
                </select><br/>
                <br/>
                <button type="submit" value="REGISTER" style={buttonStyle}>REGISTER</button><br/>
            </form>

          </div>

        </body>
      
      </html>
    );
  }
}

module.exports = NewUser;