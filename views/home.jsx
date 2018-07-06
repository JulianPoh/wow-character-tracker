var React = require("react");



class Home extends React.Component {
  render() {
    
    if (response.cookie('logged_in', 'true')) {

      return(
        <form action="/users/login" method="POST">
          Email: <input name="email" type="email"/><br/>
          Password: <input name="password" type="password"/><br/>
          <input type="submit" value="Login"/><br/>
        </form>
      )
    }
  }
}

module.exports = Home;
