import React from "react";
import "./FollowersCard.css";
import { Followers } from "../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3> Who is following you</h3>

      {Followers.map((Follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={Follower.img} alt="" className="followerImg" />
              <div className="name">
                <span>{Follower.name}</span>
                <span>@{Follower.username}</span>
              </div>
            </div>

<button className="button fc-button" > 
    follow
</button>

          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
