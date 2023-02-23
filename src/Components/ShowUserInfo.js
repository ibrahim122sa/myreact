import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const ShowUserInfo = ({ userInformation }) => {
     const { setShowUSerInfo } = useContext(UserContext);
  return (
    <div className="info-wrapper" onClick={(e)=>{
      setShowUSerInfo(false);
    }}>
      <div className="info-header"></div>
      <div className="info-content">
        <img src={userInformation.image} />
        <h1>{userInformation.name}</h1>
        <p>{userInformation.location}</p>
      </div>
    </div>
  );
};

export default ShowUserInfo;
