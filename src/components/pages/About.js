import React from "react";
// import "../../App.css";
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
        <div className="about-section-content">
          <h1>Are you truly free?</h1>
          <p> What does it mean?</p>
        </div>
      </div>
      <hr />
      <div className="bottom-container">
        <div className="picture-holder">
          <img src="images/rene.jpg" />
          <img src="images/laotsu.jpg" />
        </div>
        <div className="philo-container">
          <div className="western">
            <h1>Western Philosophy:</h1>
            <p>
              * Life is a journey towards eternal realities that are beyond the
              realities that surround us
            </p>
            <p>* Cosmological Unity</p>
            <p>
              Circular view of the universe, based on the perception of eternal
              recurrence
            </p>
            <p>Inner-world dependent</p>
            <p>
              Self-liberation from the false "Me" and finding the true "Me". The
              highest state is believed to be a state of 'no-self', where
              neither self-worth nor self-importance have any real meaning.
            </p>
          </div>
          <div className="eastern">
            <h1>Eastern Philosophy:</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
