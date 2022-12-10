import React from "react";
import Buttons from "../components/SocialButtons/Buttons.js";
import image from "../images/ProfileAbout.jpg"
import {
  MainDiv,
  ImageId,
  FullName,
  AboutMe,
  Aducation,
} from "../components/AboutMeStyled";

const AboutMePage = () => {
  return (
    <MainDiv>
      <ImageId
        src={image}
        alt=""
      />
      <FullName>Shahaf Vigder</FullName>
      <AboutMe>שחף ויגדר בן 21 מחדרה בן להורים מהחלומות ואח לשני אחים קטנים</AboutMe>
      <Aducation>FullStack Developer</Aducation>
      <div>
        <Buttons />
      </div>
    </MainDiv>
  );
};

export default AboutMePage;
