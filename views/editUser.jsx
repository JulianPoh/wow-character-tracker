var React = require("react");

class EditUser extends React.Component {
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
            <h2>EDITING USER #<span>{this.props.users.id}: {this.props.users.name}</span></h2>
              
            <form method="PUT" action="/user/new" style={formStyle}>
                <label className="form-label" style={labelStyle}>Change Name: </label><br/>
                <input name="name" type="text" defaultValue={this.props.users.name}/><br/>
                <br/>
                <label className="form-label">Change Email: </label><br/>
                <input name="email" type="email" defaultValue={this.props.users.email}/><br/>
                <br/>
                <label className="form-label">Change Password: </label><br/>
                <input name="password" type="password" defaultValue={this.props.users.password}/><br/>
                <br/>
                <label className="form-label">Change Location: </label><br/>
                <select name="location">
                  <option selected="selected" defaultValue={this.props.users.location}></option>
                  <option value="NACA">North America & Canada</option>
                  <option value="SA">South America</option>
                  <option value="EU">Europe</option>
                  <option value="AS">Asia</option>
                  <option value="AUNZ">Australia & New Zealand</option>
                </select><br/>
                <br/>
                <input type="submit" value="UPDATE" /><br/>
            </form>

          </div>

        </body>
      
      </html>
    );
  }
}

module.exports = EditUser;