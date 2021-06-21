import React from "react";
import "../../App.css";
import "./About.css";
import ReactPlayer from "react-player";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

const About = () => {
  return (
    <>
      <h1 className="top-ele">Curious to learn?</h1>
      <hr />
      <div className="about-section">
        <hr />
        <ReactPlayer
          className="yo-vid"
          url="https://www.youtube.com/watch?v=1A_CAkYt3GY&ab_channel=CrashCourseCrashCourseVerified"
        />
        <h3>
          The purpose of Philosophy is the discovery of what is the purpose of
          man's existence
          <hr />
        </h3>
      </div>
      <hr />
      <div className="bottom-container">
        <img src="images/pexep.jpg" />
        <div className="philo-container">
          <div className="eastern">
            <h1>Eastern Philosophy:</h1>
          </div>
          <div className="western">
            <h1>Western Philosophy:</h1>
            <p>This is the information</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
