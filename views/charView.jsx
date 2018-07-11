var React = require("react");

class Character extends React.Component {
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
      width: '100px',
      height: '38px',
      verticalAlign: 'top',
      fontSize: '12px'
    }

    const formStyle = {
      margin: '10 10px',
      width: '100px',
      height: '20px',
      verticalAlign: 'top',
      fontSize: '12px'
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
          <div>
            <img src={this.props.characters.image}/>
            <ul className="characters-list">
              <li className="characters-attribute">
                ID: {this.props.characters.id}
              </li>
              <li className="characters-attribute">
                Name: {this.props.characters.name}
              </li>
              <li className="characters-attribute">
                Faction: {this.props.characters.faction}
              </li>
              <li className="characters-attribute">
                Race: {this.props.characters.race}
              </li>
              <li className="characters-attribute">
                Gender: {this.props.characters.gender}
              </li>
              <li className="characters-attribute">
                Class: {this.props.characters.class}
              </li>
            </ul>
            <a href={'/character/' + this.props.characters.id + '/edit'}><button style={buttonStyle}>EDIT CHARACTER</button></a>
            <a href={'/character/' + this.props.characters.id + '/delete'}><button style={buttonStyle}>DELETE CHARACTER</button></a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Character;