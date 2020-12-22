import React, { useContext } from "react";
import "./Profile.scss";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/button/Button";
// import { greeting } from "../../portfolio";
import { useSelector, useDispatch } from "react-redux";
import Typist from "react-typist";

import { Fade } from "react-reveal";

export default function Profile() {
  const { userImage, username, subTitle, description, userImageresumeLink } = useSelector(
    (state) => state.profile
  );

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-image-div">
            <img className="profile-image" alt="user profile" src={userImage} />
            <h2>{username}</h2>
            <p>
              <Typist>
                {subTitle[0]}
                <Typist.Backspace count={subTitle[0].length} delay={200} />
                {subTitle[1]}
              </Typist>
            </p>
            {/* <SocialMedia /> */}
          </div>

          <div className="greeting-text-div">
            <div>
              <p
                className="greeting-text-p subTitle"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>

              <div className="button-greeting-div">
                {/* <Button text="See my resume" newTab={true} href={resumeLink} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
