import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../context/userContext";
import Header from "./Header";
import ShowUserInfo from "./ShowUserInfo";
import Users from "./Users";

function Home() {
  const [gender, setGender] = useState(null);
  const [nationality, setNationality] = useState(null);
  const {showUserInfo,userInfo}=useContext(UserContext)
 


  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="users-wrapper">
          <div className="users-inner-header">
            <h2>All Users</h2>
            <div className="filter">
              <input
                type="text"
                className="form-control gender"
                placeholder="Gender"
                onKeyUp={(e) => {
                  if(e.key == 'Enter'){
                    setGender(e.target.value);
                  }
                }}
              />
              <input
                type="text"
                className="form-control nationality"
                placeholder="Nationality"
                onKeyUp={(e) => {
                  if (e.key == "Enter") {
                    setNationality(e.target.value);
                  }
                }}
              />
            </div>
          </div>
          <Users gender={gender} nationality={nationality}></Users>
        </div>
      </div>
      {showUserInfo && (
        <ShowUserInfo userInformation={userInfo && userInfo}></ShowUserInfo>
      )}
    </>
  );
}

export default Home;
