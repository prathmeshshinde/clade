import React from "react";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import ProfileLogo from "../../assets/alt.png";

const Profile = () => {
  return (
    <div className="flex items-center">
      <div className="w-8 text-xl">
        <Bell width="24px" height="24px" />
      </div>
      <div className="flex items-center justify-between w-12">
        <img src={ProfileLogo} alt="profile" className="w-8" />
        <Arrow width="12px" height="12px" />
      </div>
    </div>
  );
};

export default Profile;
