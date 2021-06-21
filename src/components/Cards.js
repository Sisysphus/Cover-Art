import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__container">
        <h1>Explore Philosophical Art</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/statue.jpg"
              text="Marble Sculpture of Galileo Galilei contemplating the nature of the universe"
              label="Prestige"
              path="/philosophers"
            />
            <CardItem
              src="images/gian.jpg"
              text="A display of the esoteric section of the National Library of Ireland in Dublin"
              label="Art"
              path="/philosophers"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/lady.jpg"
              text="Inquiry into the nature of life. Strength as a virtue"
              label="Art"
              path="/philosophers"
            />
            <CardItem
              src="images/sphere.jpg"
              text="The reflective experience of the self embodied"
              label="Philosophy"
              path="/philosophers"
            />
            <CardItem
              src="images/board.jpg"
              text="Cogito ergo sum?"
              label="Philosophy"
              path="/philosophers"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
