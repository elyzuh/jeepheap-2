import React, { Component } from 'react';
import '../index.css'
import dummyCoop from '../assets/dummyCoop.png';
import profile from '../assets/profile.png';




class CMain extends Component {
  constructor() {
    super();
    this.state = {
      welcome1: "HOME",
      CoopName: "Lorem Transport Coop",
      dummyName: "John Doe",              /* subject to change, get info from DB :D */
      role: "CASHIER"
    };
  }

  componentDidMount() { }

  componentWillUnmount() { }

  render() {
    return (
      <div className="parent">

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
            <li><button>Encode</button></li>
            <li><button>Records</button></li>
            <li><button>Sign Out</button></li>
          </ul>



        </div>
        </div>

      </div>



    );
  }
}


export default CMain;