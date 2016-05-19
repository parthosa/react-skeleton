var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
  //return an object of initial states
  getInitialState: function () {
    return {valid:true,value: ""};
  },
  onChange: function(e){
    if(!validator.validate(e.target.value)){
      this.setState({valid:false, value:e.target.value});
    }
    else{
      this.setState({valid:true,value:e.target.value});
    }
  },
  render: function () {
    var formClass = this.state.valid ? "form-group" : "form-group has-error";
    return (
      <div className={formClass}>
        <label for="email">Email:</label>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value}></input>
      </div>
    );
  }
});

module.exports = EmailField;
