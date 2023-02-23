import { Component } from "react";
import "../App.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2> Users</h2>
        <div className="user-info">
          <p>Jones Ferdinand</p>
          <img className="myimg" src="./mheader.png" alt="img" />
        </div>
      </div>
    );
  }
}
export default Header;
