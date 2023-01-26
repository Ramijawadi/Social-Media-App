import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imgRef = useRef();

  const onchangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];

      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />

      <div>
        <input type="text" placeholder="what's happening " />

        <div className="postOptions">
          <div
            className="Option"
            style={{ color: "var(--photo)" }}
            onClick={() => imgRef.current.click()}
          >
            <UilScenery />
            photo
          </div>
          <div className="Option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            video
          </div>
          <div className="Option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="Option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imgRef}
              onChange={onchangeImage}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
