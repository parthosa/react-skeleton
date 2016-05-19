var React = require('react');
var EmailField = require('./EmailField.jsx');
var PasswordField = require('./PasswordField.jsx');

var Login = React.createClass({

  onSubmit: function (e) {
    if(!this.refs.fieldEmail.state.valid){
      alert("Invalid Email");
    }
    else{
      //submit to server
      var httpRequestBody = {
        "email" : this.refs.fieldEmail.state.value,
        "password":this.refs.fieldPassword.state.value
      };
      console.log(httpRequestBody);
    }
  },
  render: function () {
    return (
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                Login
              </h3>
            </div>
            <div className="panel-body">
                <EmailField ref="fieldEmail"/>
                <PasswordField type="" ref="fieldPassword"/>
                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </div>
          </div>
    );
  }
});

module.exports = Login;
