var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this);
    return (
      <html>
        <head />
        <body>
          <h1>Welcome to Azeroth</h1>
          <a href="/users/login">USER LOGIN</a>
          <br/>
          <a href="/users/new">CREATE NEW USER</a>
        </body>
      </html>
    );
  }
}

module.exports = Home;
