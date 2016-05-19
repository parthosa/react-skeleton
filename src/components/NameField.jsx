var React = require('react');

var NameField = React.createClass({
  getInitialState : function () {
    return {value: ""};
  },
  onChange: function (e) {
    this.setState({value:e.target.value});
  },
  render: function () {
    return (
      <div className="form-group">
        <label for={this.props.type+"Name"}>{this.props.type} Name</label>
        <input className="form-control" onChange={this.onChange} value={this.state.value} placeholder ={this.props.type+" Name"} />
      </div>
    );
  }
});

module.exports = NameField;
