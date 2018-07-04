var React = require("react");

class NewUser extends React.Component {
  render() {
    // If the user is not logged in, display the login form.
    // If the user is logged in, display his name, his tasks, and a logout button.
    return (
      <html>
        <head />
        <body>
          <h1>New User Registration</h1>
            <form method="POST" action="/users/new">
                Name: <br/>
                <input name="name" type="text" /><br/>
                Email: <br/>
                <input name="email" type="email" /><br/>
                Password:<br/>
                <input name="password" type="password" /><br/>
                Location:<br/>
                <select name="location">
                  <option selected="selected" value="USA">North America</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                </select> 
                <input type="submit" value="Sign Up" /><br/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = NewUser;