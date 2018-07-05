var React = require("react");


class NewChar extends React.Component {
  render() {
    // const allegiance = this.state.allegiance;
    return (
      <html>
        <head />
        <body>
          <h1>New Character Creation</h1>
            <form method="POST" action="/characters/new">
                Name: <br/>
                <input name="name" type="text" placeholder="New Character Name"/><br/>
                <br/>
                Faction: <br/>
                <select name="allegiance" id="select-faction">
                  <option selected="selected" value="chooseAllegiance">CHOOSE YOUR ALLEGIANCE</option>
                  <option value="alliance">Alliance</option>
                  <option value="horde">Horde</option>
                </select><br />
                <br/>
                Race: <br/>
                <select name="race" id="select-race">
                  <option selected="selected" value="chooseRace">CHOOSE A RACE</option>
                </select><br />
                <br/>
                Class: <br/>
                <select name="class" id="select-class">
                  <option selected="selected" value="chooseClass">CHOOSE A CLASS</option>
                </select><br />
                <br/>
                Image: <br/>
                <input name="img" type="text" placeholder="New Character Image"/><br/>
                <br/>
                <input type="submit" value="Create New Character" /><br/>
            </form>
            <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = NewChar;