import React, { Component } from 'react';
import '../index.css';
import dummyCoop from '../assets/dummyCoop.png';
import profile from '../assets/profile.png';


class CMain extends Component {
  constructor() {
    super();
    this.state = {
      welcome1: "HOME",
      CoopName: "Lorem Transport Coop",
      dummyName: "John Doe",
      role: "CASHIER"
    };
    this.encodePage = this.encodePage.bind(this);
    this.recordsPage = this.recordsPage.bind(this);

  }


  encodePage(){
    this.props.history.push('/Cashier/Encode');
  }

  recordsPage(){
    this.props.history.push('/Cashier/Records');
  }
  
  componentDidMount() {
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
                {this.state.dummyName}
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
          <ul >
            <li><button>Home</button></li>
            <li><button onClick={this.encodePage}>Encode</button></li>
            <li><button onClick={this.recordsPage}>Records</button></li>
            <li><button>Sign Out</button></li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default CMain;
