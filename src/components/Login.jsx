import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import '/src/index.css';
import logo from '../assets/logo.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      welcome1: "Welcome back,",
      message: "Please enter info details to login.",
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

handleLogin = () => {
  const { username, password } = this.state;

  fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
  })
  .then((response) => response.json())
  .then((data) => {
      console.log(data);

      if (data.Status === 'Success!') {
          const { employee_id, username, name, role } = data.user;

          console.log(`Logged in as ${name}, Employee ID: ${employee_id}`);

          // Update the state in the Login component
          this.setState({ loggedInUser: { employee_id, username, name, role } });

          // Redirect to CMain component
          this.props.history.push('/Cashier/Home');
      }
  })
  .catch((error) => {
      console.error('Error during login:', error);
  });
};

  render() {
    return (
      <div className='login-page'>
        <div className='login-container'>
          <div className='login-container-left'>
            <img src={logo} className='logo' alt="Your Logo" />
          </div>
          <div className='login-container-right'>
            <h1>{this.state.welcome1}</h1>
            <h3>{this.state.message}</h3>
            <input
              name="username"
              placeholder='username'
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <br />
            <input
              name="password"
              type='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <br />
            <button className='login-page-button' onClick={this.handleLogin}>LOG IN</button> <br />
            <a href='#' className='forgot-password-link'>FORGOT PASSWORD?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
