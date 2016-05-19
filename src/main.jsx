var React = require('react');
var ReactDom = require('react-dom');
var Register = require('./components/Register.jsx');
var Login = require('./components/Login.jsx');
ReactDom.render(<Register/>,document.getElementById('formRegister'));
ReactDom.render(<Login/>,document.getElementById('formLogin'));
