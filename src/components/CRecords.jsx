import React, { Component } from 'react';
import '../index.css';
import dummyCoop from '../assets/dummyCoop.png';
import profile from '../assets/profile.png';


class CRecords extends Component {
  constructor() {
    super();
    this.state = {
      welcome1: "RECORDS",
      CoopName: "Lorem Transport Coop",
      Name: "John Doe",
      role: "CASHIER"
    };
    this.homePage = this.homePage.bind(this);
    this.encodePage = this.encodePage.bind(this);

  }


  homePage(){
    this.props.history.push('/Cashier/Home');
  }

  encodePage(){
    this.props.history.push('/Cashier/Encode');
  }

  componentDidMount() {
    // Fetch user information from the server
    fetch('http://localhost:3000/userinfo', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name_first,
          lastName: data.name_last,
        });
      })
      .catch((error) => {
        console.error('Error fetching user information:', error);
      });

    const currentPage = window.location.pathname.toLowerCase();
    if (currentPage === "/home" || currentPage === "/cmain") {
      document.getElementById("homeButton").classList.add("selected");
    } else if (currentPage === "/encode") {
      document.getElementById("encodeButton").classList.add("selected");
    } else if (currentPage === "/records") {
      document.getElementById("recordsButton").classList.add("selected");
    } else if (currentPage === "/signout") {
      document.getElementById("signoutButton").classList.add("selected");
    }

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

  componentWillUnmount() {
  }

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

export default CRecords;
