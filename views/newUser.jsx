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
            <form method="POST" action="/user/new">
                Name: <br/>
                <input name="name" type="text" /><br/>
                <br/>
                Email: <br/>
                <input name="email" type="email" /><br/>
                <br/>
                Password:<br/>
                <input name="password" type="password" /><br/>
                <br/>
                Location:<br/>
                <select name="location">
                  <option selected="selected" value="NACA">North America & Canada</option>
                  <option value="SA">South America</option>
                  <option value="EU">Europe</option>
                  <option value="AS">Asia</option>
                  <option value="AUNZ">Australia & New Zealand</option>
                </select><br/>
                <br/>
                <input type="submit" value="Sign Up" /><br/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = NewUser;