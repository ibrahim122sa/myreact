import { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
function Sidebar () {
    const [active, setActive] = useState("users");
    return (
      <div className="navbar ">
        <img src="./logo-white-small1.png" alt="img" />
        <div className="nav-items">
          <Link>
            <i class="fa-solid fa-chart-pie"></i>Overview
          </Link>
          <Link>
            <i class="fa-solid fa-ticket"></i>Tickets
          </Link>
          <Link>
            <i class="fa-solid fa-lightbulb"></i>Ideas
          </Link>
          <Link
            to="/"
            className={active == "users" ? "Active" : ""}
            onClick={(e) => {
              setActive("users");
            }}
          >
            <i class="fa-solid fa-user"></i>Users
          </Link>
        </div>
      </div>
    );
  }
export default Sidebar;
