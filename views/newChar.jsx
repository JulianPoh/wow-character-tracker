var React = require("react");

class NewChar extends React.Component {
  render() {

    const bodyStyle = {
      backgroundColor: '#343B22',
      color: 'white',
      fontFamily: 'Averia Libre'
    }

    const containerStyle = {
      width: '400px',
      margin: '0 auto',
      verticalAlign: 'center',
      color: 'white'
    }

    return (
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
        <link href="css/style.css"/>
        </head>
        <body style={bodyStyle}>
          <div className="container" style={containerStyle}>
            <h1>New Character Creation</h1>
            <form method="POST" action="/character/new">
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
          <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = NewChar;