var React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h4>Editing: {this.props.characters.name}</h4>
          <form
            className="editChar-form"
            method="POST"
            action={"/character/"+ this.props.characters.id + "?_method=PUT"}
          >
            <div className="char-attribute">
              Character ID: {this.props.characters.id} />
            </div>
            <br/>
            <div className="char-attribute">
              Name:<br/>
              <input name="name" type="text" defaultValue={this.props.characters.num} />
            </div>
            <br/><br/>
            <div className="char-attribute">
              Faction:<br/>
              <input name="faction" type="text" defaultValue={this.props.characters.name} />
            </div>
            <br/><br/>
            <div className="char-attribute">
              Race:<br/>
              <input name="race" type="text" defaultValue={this.props.characters.race} />
            </div>
            <br/><br/>
            <div className="char-attribute">
              Gender:<br/>
              <input name="gender" type="text" defaultValue={this.props.characters.gender} />
            </div>
            <br/><br/>
            <div className="char-attribute">
              Class:<br/>
              <input name="class" type="text" defaultValue={this.props.characters.class} />
            </div>
            <br/><br/>
            <input name="submit" type="submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Edit;
