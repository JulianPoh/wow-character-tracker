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
            <h2>ARE YOU SURE YOU WANT TO DELETE CHARACTER: <span>{this.props.characters.name}</span>?</h2>

            <form className="editChar-form" method="POST" action={"/character/" + this.props.characters.id + "/delete?_method=DELETE"}>
                <input type="submit" value="YES! DELETE IT!" />
              </form>
              <a href="/user/userhome"><button style={buttonStyle}>NO. RETURN HOME</button></a>

          </div>
          <script src="/newCharScript.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = EditChar;
