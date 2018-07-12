var React = require("react");

class Home extends React.Component {
  render() {
  
    const bodyStyle = {
      fontFamily: 'Averia Libre',
      textDecoration: 'none',
      verticalAlign: 'center',
      backgroundImage: "URL('/img/wow3.jpg')",
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

    const wrapper = {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridGap: '10px'
    }

    const charImgStyle = {
      height: '200px',
      width: 'auto'
    }

    return(
        <html>
          
          <head>
          <link href="https://fonts.googleapis.com/css?family=Averia+Libre" rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="css/style.css"/>
          </head>
          
          <body style={bodyStyle}>
            
            <div className='container' style={containerStyle}>
            
              <img src="/img/wow-logo.png" style={logoStyle}/>
              <br/>
              <br/>

              <div className='btn-container'>  
                <a href="/character/new"><button style={buttonStyle}>ADD NEW CHARACTER</button></a>
                <a href="/user/edit"><button style={buttonStyle}>EDIT USER DETAILS</button></a>
                <p><form action="/logout" method="POST">
                  <button name='logout' type="submit" style={buttonStyle}>LOGOUT</button>
                </form></p>
              </div>
              <br/>
              <div className='char-container' style={wrapper}>
                    
                    {this.props.characters.map(character => (
                      <div>
                      <p key={character.id}>
                        <a href={'/character/' + character.id}><img src={character.image} style={charImgStyle}/></a><br/>
                        <p><h3>{character.name}</h3></p>
                        <p>{character.race} {character.class} ({character.faction})</p><br/>
                      </p>
                      </div>
                    ))}
                  
              </div>
            
            </div>
          </body>
        
        </html>
      )
    }
  }

module.exports = Home;
