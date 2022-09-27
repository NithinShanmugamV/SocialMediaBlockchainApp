import React from "react";
import { Link } from "react-router-dom";
import TweetInFeed from "../components/TweetInFeed";
import { defaultImgs } from "../defaultimgs";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="pageIdentify">Profile</div>
      <img className="profileBanner" src={defaultImgs[1]}></img>
      <div className="pfpContainer">
        <img className="profilePFP" src={defaultImgs[0]}></img>
        <div className="profileName">Nithin</div>
        <div className="profileWallet">0*42..314</div>
        <Link to ="/settings">
          <div className="profileEdit">Edit Profile</div>
        </Link>
        <div className="profileBio">
          My web3 social media app
        </div>
        <div className="profileTabs">
          <div className="profileTab">Your Tweets</div>
        </div>
      </div>
      <TweetInFeed profile = {true}></TweetInFeed>
    </>
  );
};

export default Profile;
