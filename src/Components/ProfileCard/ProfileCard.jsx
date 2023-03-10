import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/image.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span> rami Jawadi</span>
        <span> Senior web Developper/Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span> 6.222</span>
            <span>Followings</span>
          </div>
          <div className="vL"></div>
          <div className="follow">
            <span> 5</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vL"></div>

              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
