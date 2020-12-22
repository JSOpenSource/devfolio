import React, { useState } from "react";
import "./Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import Typist from "react-typist";

import { setData } from "./profileSlice";

import { Fade } from "react-reveal";
import Edit from "../../sub-components/edit/Edit";

export default function Profile() {
  const profileFields = useSelector((state) => state.profile);
  const { userImage, username, subTitle, description1, description2 } = profileFields;

  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const onDataChange = (data) => {
    dispatch(setData(data));
    setIsEditable(!isEditable);
  };

  return (
    <Fade bottom duration={1000} distance="40px">
      {isEditable ? (
        <Edit fields={profileFields} onSubmit={onDataChange} />
      ) : (
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-image-div">
              <img className="profile-image" alt="user profile" src={userImage} />
              <h2>{username}</h2>
              <Typist>{subTitle}</Typist>
            </div>

            <div className="greeting-text-div">
              <div>
                <p className="greeting-text-p subTitle">{description1}</p>
                <p className="greeting-text-p subTitle">{description2}</p>
                <div className="button-greeting-div">
                  {/* <Button text="See my resume" newTab={true} href={resumeLink} /> */}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setIsEditable(!isEditable);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </Fade>
  );
}
