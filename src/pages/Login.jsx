import React from 'react';
import LoginBox from '../components/LoginBox';
import '../style/pages/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="background-image" />
        <LoginBox />
      </div>
    );
  }
}

export default Login;
