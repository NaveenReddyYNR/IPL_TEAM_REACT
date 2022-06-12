import React from "react";
import "./styles.css";
// import { Players } from "../Players";
const Header = () => {
  return (
    <>
      <header className="HeaderSection">
        <img
          className="IplTeamLogo"
          src="https://aniportalimages.s3.amazonaws.com/media/details/lrpgfsd00x4002022011108381120220111085400.jpg"
          alt="IPL-TEAM-LOGO"
        />
        <button className="addteamBtn">ADD TEAM</button>
        <button className="addplayerBtn">ADD PLAYER</button>

        <h1>HOME</h1>
      </header>
    </>
  );
};

export default Header;
