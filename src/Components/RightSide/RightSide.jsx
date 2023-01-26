import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpend, setModalOpend] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpend(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpend} setModalOpend={setModalOpend} />
    </div>
  );
};

export default RightSide;
