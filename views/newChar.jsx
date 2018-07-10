var React = require("react");

class NewChar extends React.Component {
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
      fontSize: '12px'
    }

    const optionStyle = {
      color: 'black'
    }

    return (
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
        <link href="css/style.css"/>
        </head>
        <body style={bodyStyle}>
              
          <div className="container" style={containerStyle}>
            
            <img src="/img/wow-logo.png" style={logoStyle}/>
            <h2 style={h1Style}>New Character Creation</h2>

            <form method="POST" action="/character/new" style={formStyle}>
                Name: <br/>
                <input name="name" type="text" placeholder="New Character Name"/><br/>
                <br/>
                Faction: <br/>
                <select name="faction" className="selection" id="select-faction">
                  <option selected="selected" value="chooseAllegiance">Choose Your Allegiance</option>
                  <option value="Alliance">Alliance</option>
                  <option value="Horde">Horde</option>
                </select><br />
                <br/>
                Race: <br/>
                <select name="race" className="selection" id="select-race">
                  <option selected="selected" value="chooseRace">Select Race</option>
                </select><br />
                <br/>
                Gender: <br/>
                <select name="gender" className="selection" id="select-gender">
                  <option selected="selected" value="chooseRace">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select><br />
                <br/>
                Class: <br/>
                <select name="class" className="selection" id="select-class">
                  <option selected="selected" value="chooseClass">Select Class</option>
                </select><br />
                <br/>
                Image: <br/>
                <input name="image" type="text" placeholder="New Character Image"/><br/>
                <br/>
                <input type="submit" value="Create New Character" /><br/>
            </form>
            
          </div>
          
          <script src="/newCharScript.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>
          <script>
            var Alert = ReactBootstrap.Alert;
          </script>
        </body>
      </html>
    );
  }
}

module.exports = NewChar;