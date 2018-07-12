var React = require("react");

class EditChar extends React.Component {
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

    const labelStyle = {
      textAlign: 'left'
    }

    const wrapper = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '10px'
    }

    const infoTextStyle = {
      textAlign: 'justify'
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
            <h2>EDITING CHARACTER : <span>{this.props.characters.name}</span></h2>
          
            <div className='char-container' style={wrapper}>

            <div id='info-window'>
              <p id='info-text' style={infoTextStyle}></p>
            </div>

            <div>
              <form className="editChar-form" method="POST" action={"/character/" + this.props.characters.id + "/edit?_method=PUT"} style={formStyle}>

                <div className="char-attribute">
                  Character ID: {this.props.characters.id}
                </div>

                <div className="char-attribute">
                  Name:<br/>
                  <input name="name" type="text" defaultValue={this.props.characters.name} />
                  </div>
                  <br/>
                  Faction: {this.props.characters.faction}<br/>
                  <select name="faction" className="selection" id="select-faction">
                    <option selected="selected" value={this.props.characters.faction}>{this.props.characters.faction}</option>
                    <option value="Alliance">Alliance</option>
                    <option value="Horde">Horde</option>
                  </select><br/>
                  <br/>
                  Race: {this.props.characters.race}<br/>
                  <select name="race" className="selection" id="select-race">
                    <option selected="selected" value={this.props.characters.race}>{this.props.characters.race}</option>
                  </select><br/>
                  <br/>
                  Gender: {this.props.characters.gender}<br/>
                  <select name="gender" className="selection" id="select-gender">
                    <option selected="selected" value={this.props.characters.gender}>{this.props.characters.gender}</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select><br/>
                  <br/>
                  Class: {this.props.characters.class}<br/>
                  <select name="class" className="selection" id="select-class">
                    <option selected="selected" value={this.props.characters.class}>{this.props.characters.class}</option>
                  </select><br/>
                  <br/>
                  Image: <br/>
                  <input name="image" type="text" defaultValue={this.props.characters.image}/><br/>
                  <br/>
                  <input type="submit" value="UPDATE" />
                </form>
              </div>

              <div id='img-window'>
              </div>
            </div>
          </div>
          <script src="/newCharScript.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = EditChar;
