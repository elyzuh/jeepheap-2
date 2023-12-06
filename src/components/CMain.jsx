import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import '../index.css';
import dummyCoop from '../assets/dummyCoop.png';
import profile from '../assets/profile.png';

class CMain extends Component {
  constructor() {
    super();
    this.state = {
      welcome1: "HOME",
      CoopName: "Lorem Transport Coop",
      Name: "John Doe",
      role: "CASHIER"
    };
    this.encodePage = this.encodePage.bind(this);
    this.recordsPage = this.recordsPage.bind(this);
  }

  encodePage() {
    this.props.history.push('/Cashier/Encode');
  }

  recordsPage() {
    this.props.history.push('/Cashier/Records');
  }

  componentDidMount() {
    this.setActiveButton();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setActiveButton();
    }
  }

  setActiveButton() {
    const currentPage = this.props.location.pathname.toLowerCase();
    const buttons = ['home', 'encode', 'records', 'signout'];

    buttons.forEach(button => {
      const buttonElement = document.getElementById(`${button}Button`);
      if (buttonElement) {
        if (currentPage.includes(button)) {
          buttonElement.classList.add('selected');
        } else {
          buttonElement.classList.remove('selected');
        }
      }
    });
  }
  

  componentWillUnmount() {}

  render() {
    const backgroundStyle = {
      backgroundImage: `url('/src/assets/Cmainbg.png')`,
    };

    return (
      <div className="cmain-page" style={backgroundStyle}>
        <div className="navbar">
          <div className="clientLogo">
            <img className="clientLogo" src={dummyCoop} alt="Logo" />
          </div>
          <div className="coop-name">
            {this.state.CoopName}
          </div>
          <div className="PageName">
            {this.state.welcome1}
          </div>

          <div className="userUser">
            <div className="userDetails">
              <div className="userName">
                {this.state.Name}
              </div>
              <div className="userRole">
                {this.state.role}
              </div>
            </div>
            <div className="userProf">
              <img className="userProf" src={profile} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="outSide">
          <div className="buttons">
            <ul>
              <li>
                <button id="homeButton" onClick={() => this.props.history.push('/Cashier/Home')}>
                  Home
                </button>
              </li>
              <li>
                <button id="encodeButton" onClick={this.encodePage}>
                  Encode
                </button>
              </li>
              <li>
                <button id="recordsButton" onClick={this.recordsPage}>
                  Records
                </button>
              </li>
              <li>
                <button id="signoutButton" onClick={() => this.props.history.push('/Login')}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CMain);
