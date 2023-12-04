
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css';
import logo from '../assets/logo.png';

class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      welcome1: "Welcome to JeepHeap!",
      message: "Explore the efficiency at your fingertips."
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className='home-page'>
        <div className='home-header'>
          <Link to="/LoginPage">Go back to Login</Link>
          <h1>JeepHeap</h1>
        </div>
        <div className='home-container'>
          <div>
            {}
          </div>
          <div className='home-container-right'>
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default TestPage;
