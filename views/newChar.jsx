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

    return (
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>
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
                <select name="allegiance" id="select-faction">
                  <option selected="selected" value="chooseAllegiance">Choose Your Allegiance</option>
                  <option value="alliance">Alliance</option>
                  <option value="horde">Horde</option>
                </select><br />
                <br/>
                Race: <br/>
                <select name="race" id="select-race">
                  <option selected="selected" value="chooseRace">Select Race</option>
                </select><br />
                <br/>
                Gender: <br/>
                <select name="gender" id="select-gender">
                  <option selected="selected" value="chooseRace">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select><br />
                <br/>
                Class: <br/>
                <select name="class" id="select-class">
                  <option selected="selected" value="chooseClass">Select Class</option>
                </select><br />
                <br/>
                Image: <br/>
                <input name="img" type="text" placeholder="New Character Image"/><br/>
                <br/>
                <input type="submit" value="Create New Character" /><br/>
            </form>
            
          </div>
          
          <script src="/newCharScript.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = NewChar;