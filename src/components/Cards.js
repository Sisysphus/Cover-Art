import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/statue.jpg"
              text="Marble Sculpture of Galileo Galilei contemplating the nature of the universe"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/gian.jpg"
              text="A display of the esoteric section of the National Library of Ireland in Dublin"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/lady.jpg"
              text="Inquiry into the nature of life. Strength as a virtue"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/sphere.jpg"
              text="The reflective experience of the self embodied"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/board.jpg"
              text="Cogito ergo sum?"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
