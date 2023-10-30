import React, {Component} from 'react';
import '../index.css'
import logo from '../assets/logo.png';

class LoginPage extends Component {
    constructor() {
      super();
      this.state = {
        welcome1: "Welcome back,",
        message:"Please enter info details to login."
      };
    }
  
    componentDidMount() {}
  
    componentWillUnmount() {}
  
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
                <input placeholder='username'/>
                <br/>
                <input type='password' placeholder='password'/>
                {/* <label>
                 <input type='checkbox' checked='checked' className='remember'/> Remember me
                </label> */}
                <br/>
                <button className='login-page-button'>LOG IN</button> <br/>
                <a href='#' className='forgot-password-link'>FORGOT PASSWORD?</a>
            </div>
          </div>
        </div>
      );
    }
  }


export default LoginPage;