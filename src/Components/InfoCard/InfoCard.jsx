import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpend, setModalOpend] = useState(false);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4> Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpend(true)}
          />

          <ProfileModal
            modalOpened={modalOpend}
            setModalOpend={setModalOpend}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span> in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span> Tunisia</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span> RamiCode inst</span>
      </div>

      <button className="button logout-button ">Logout</button>
    </div>
  );
};

export default InfoCard;
