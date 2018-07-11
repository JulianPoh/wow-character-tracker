var React = require("react");

class EditUser extends React.Component {
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
            <h2>EDITING USER #<span>{this.props.users.id }: {this.props.users.name}</span></h2>
              
            <form method="POST" action={"/user/edit?_method=PUT"} style={formStyle}>
                <label className="form-label" style={labelStyle}>Change Name: </label><br/>
                <input name="name" type="text" defaultValue={this.props.users.name}/><br/>
                <br/>
                <label className="form-label">Change Email: </label><br/>
                <input name="email" type="email" defaultValue={this.props.users.email}/><br/>
                <br/>
                <label className="form-label">Change Location: </label><br/>
                <select name="location">
                <option selected="selected" value={this.props.users.location}>{this.props.users.location}</option>
                  <option value="North America & Canada">North America & Canada</option>
                  <option value="South America">South America</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Australia & New Zealand">Australia & New Zealand</option>
                </select><br/>
                <br/>
                <button type="submit" value="UPDATE" style={buttonStyle}>UPDATE USER DETAILS</button><br/>
            </form>

          </div>

        </body>
      
      </html>
    );
  }
}

module.exports = EditUser;