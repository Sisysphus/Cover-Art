import React from "react";

function IndividualPhilo() {
  return (
    <div className="ui-container">
      <div className="ui card yeet">
        <div className="image">
          <img src="/images/plato.jpg" />
        </div>
        <div class="content">
          <a className="header">Plato</a>
          <div className="meta">
            <span className="date">Born in 428 BCE </span>
          </div>
          <div className="description">
            Plato was an Athenian philosopher during the Classical period in
            Ancient Greece, founder of the Platonist school of thought and the
            Academy, the first institution of higher learning in the Western
            world.
          </div>
        </div>
        <div className="extra content">
          <div className="ui bottom attached button">
            <a href="https://en.wikipedia.org/wiki/Plato">
              <i className="add icon"></i>
              Click to find out more!
            </a>
          </div>
        </div>
      </div>
      <div className="ui card">
        <div className="image">
          <img src="/images/plato.jpg" />
        </div>
        <div class="content">
          <a className="header">Aristotle</a>
          <div className="meta">
            <span className="date">Born in 428 BCE </span>
          </div>
          <div className="description">
            Plato was an Athenian philosopher during the Classical period in
            Ancient Greece, founder of the Platonist school of thought and the
            Academy, the first institution of higher learning in the Western
            world.
          </div>
        </div>
        <div className="extra content">
          <div className="ui bottom attached button">
            <a href="https://en.wikipedia.org/wiki/Plato">
              <i className="add icon"></i>
              Click to find out more!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualPhilo;
