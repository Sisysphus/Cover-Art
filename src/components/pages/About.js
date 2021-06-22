import React from "react";
// import "../../App.css";
import "./About.css";
import ReactPlayer from "react-player";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

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
          <div className="meaning-wrap">
            <h1>Are you truly free?</h1>
          </div>
          <p> What does it mean?</p>
          <div className="arrow-pointers">
            <img className="image-2" src="images/arrow-right.png" />
            <img className="image-1" src="images/arrow-left.png" />
          </div>
          <div className="about-section-elements">
            <h3 className="free-will">Free Will</h3>
            <h3 className="determinism">Determinism</h3>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="top-ele">What is the fuss all about?</h1>
      <div className="bottom-container">
        <div className="picture-holder">
          <img alt="Rene Descartes" src="images/rene.jpg" />
          <img alt="Lao-tsu" src="images/laotsu.jpg" />
        </div>

        <div className="philo-container">
          <div className="western">
            <h1>Western Philosophy:</h1>
            <p>Feeling oneself as an element of the Divine</p>
          </div>
          <div className="eastern">
            <h1>Eastern Philosophy:</h1>
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
        </div>
      </div>
    </>
  );
};

export default About;
