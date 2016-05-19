var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');
var PasswordField = require('./PasswordField.jsx');

var Register = React.createClass({

  onSubmit: function (e) {
    if(!this.refs.fieldEmail.state.valid){
      alert("Invalid Email");
    }
    else{
      //submit to server
      var httpRequestBody = {
        "email" : this.refs.fieldEmail.state.value,
        "firstName": this.refs.fieldFirstName.state.value,
        "lastName": this.refs.fieldLastName.state.value,
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
                Register
              </h3>
            </div>
            <div className="panel-body">
                <NameField type="First" ref="fieldFirstName"/>
                <NameField type="Last" ref="fieldLastName"/>
                <EmailField ref="fieldEmail"/>
                <PasswordField type="" ref="fieldPassword"/>
                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </div>
          </div>
    );
  }
});

module.exports = Register;
