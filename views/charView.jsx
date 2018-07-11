var React = require("react");

class Character extends React.Component {
  render() {

    const bodyStyle = {
      fontFamily: 'Averia Libre',
      textDecoration: 'none',
      verticalAlign: 'center',
      backgroundImage: "URL('/img/slate.jpg')",
      backgroundSize: 'cover',
      color: 'gold',
      textShadow: '0 0 5px black'
    }

    const containerStyle = {
      margin: '0 auto',
      textAlign: 'center',
    }

    const logoStyle = {
      maxWidth: '20%',
      textAlign: 'center',
    }

    const h1Style = {
      textAlign: 'center'
    }    
  
    const buttonStyle = {
      margin: '0 5px',
      width: '165px',
      height: '50px',
      verticalAlign: 'top',
      backgroundImage: "URL('/img/wormhole.gif')",
      backgroundSize: 'stretch',
      fontSize: '12px',
      color: 'gold',
      textShadow: '0 0 5px black'
    }


    const formStyle = {
      margin: '10 10px',
      width: '100px',
      height: '20px',
      verticalAlign: 'top',
      fontSize: '12px'
    }


    const charImgStyle = {
      height: '300px',
      width: 'auto'
    }


    const rowStyle = {
      display: 'inline-block',
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '20px'
    }



      return(
        <html>
          
          <head>
          <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="css/style.css"/>
          </head>
          
          <body style={bodyStyle}>
            
            <div className='container' style={containerStyle}>
            
              <img src="/img/wow-logo.png" style={logoStyle}/> <br/>
            
            <div className='row'>
              <div style={rowStyle}>
                <p className="characters-attribute">
                  ID: {this.props.characters.id}
                </p>
                <p className="characters-attribute">
                  Name: {this.props.characters.name}
                </p>
                <p className="characters-attribute">
                  Faction: {this.props.characters.faction}
                </p>
                <p className="characters-attribute">
                  Race: {this.props.characters.race}
                </p>
                <p className="characters-attribute">
                  Gender: {this.props.characters.gender}
                </p>
                <p className="characters-attribute">
                  Class: {this.props.characters.class}
                </p>
              </div>
              <div style={rowStyle}>
              <img src={this.props.characters.image} style={charImgStyle}/>
              </div>              
            </div>

            <a href={'/user/userhome'}><button style={buttonStyle}>BACK TO HOME</button></a>
            <a href={'/character/' + this.props.characters.id + '/edit'}><button style={buttonStyle}>EDIT CHARACTER</button></a>
            <a href={'/character/' + this.props.characters.id + '/delete'}><button style={buttonStyle}>DELETE CHARACTER</button></a>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Character;