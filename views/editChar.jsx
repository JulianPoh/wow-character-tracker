var React = require("react");

class EditChar extends React.Component {
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
      textAlign: 'center'
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

    const labelStyle = {
      textAlign: 'left'
    }


    return (
      <html>
        
        <head>
          <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
          <link href="css/style.css"/>
        </head>
        
        <body style={bodyStyle}>
          
          <div className='container' style={containerStyle}>
          
            <img src="/img/wow-logo.png" style={logoStyle}/>
            <br/>
            <h2>EDITING CHARACTER : <span>{this.props.characters.name}</span></h2>

            <form className="editChar-form" method="POST" action={"/character/" + this.props.characters.id + "/edit?_method=PUT"}>

              <div className="char-attribute">
                Character ID: {this.props.characters.id}
              </div>

              <div className="char-attribute">
                Name:<br/>
                <input name="name" type="text" defaultValue={this.props.characters.name} />
                </div>
                <br/>
                Current Faction: {this.props.characters.faction}<br/>
                <select name="faction" className="selection" id="select-faction">
                  <option selected="selected" value="chooseAllegiance">Change Allegiance?</option>
                  <option value="Alliance">Alliance</option>
                  <option value="Horde">Horde</option>
                </select><br/>
                <br/>
                Current Race: {this.props.characters.race}<br/>
                <select name="race" className="selection" id="select-race">
                  <option selected="selected" value="chooseRace">Change Race?</option>
                </select><br/>
                <br/>
                Current Gender: {this.props.characters.gender}<br/>
                <select name="gender" className="selection" id="select-gender">
                  <option selected="selected" value="chooseRace">Change Gender?</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select><br/>
                <br/>
                Current Class: {this.props.characters.class}<br/>
                <select name="class" className="selection" id="select-class">
                  <option selected="selected" value="chooseClass">Change Class?</option>
                </select><br/>
                <br/>
                Image: <br/>
                <input name="image" type="text" placeholder={this.props.characters.image}/><br/>
                <br/>
                <input type="submit" value="UPDATE" />
              </form>

          </div>
          <script src="/newCharScript.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = EditChar;
