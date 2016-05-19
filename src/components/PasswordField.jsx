var React = require('react');

var PasswordField = React.createClass({
  getInitialState: function () {
    return {valid:true,value:""};
  },
  onChange: function (e) {
    // if(this.props.type == "Re-Enter"){
    //   if(this.props.key != e.target.value)
    //     this.setState({valid:false,value:e.target.value});
    // }
    // else
    this.setState({valid:true,value:e.target.value});
  },
  render: function () {
    var formClass = this.state.valid ? "form-group": "form-group has-error";
    return (
      <div className={formClass}>
        <label for={this.props.type + "password"}>{this.props.type} Password:</label>
        <input type="password" className="form-control" onChange={this.onChange} value={this.state.value} placeholder={this.props.type+ "Password"}/>
      </div>
    );
  }
});


module.exports = PasswordField;
