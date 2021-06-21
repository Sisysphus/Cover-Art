import React from "react";
import "./IndividualPhilo.css";
function IndividualPhilo() {
  return (
    <div className="ui-container">
      <div className="ui card">
        <div className="image-card">
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
        <div className="image-card">
          <img src="/images/aristotle.jpg" />
        </div>
        <div class="content">
          <a className="header">Aristotle</a>
          <div className="meta">
            <span className="date">Born in 384 BCE </span>
          </div>
          <div className="description">
            was a Greek philosopher and polymath during the Classical period in
            Ancient Greece. Taught by Plato, he was the founder of the Lyceum,
            the Peripatetic school of philosophy, and the Aristotelian
            tradition. His writings cover many subjects including physics,
            biology, zoology, metaphysics, logic, ethics, aesthetics, poetry,
            theatre, music, rhetoric, psychology, linguistics, economics,
            politics, meteorology, geology and government. Aristotle provided a
            complex synthesis of the various philosophies existing prior to him.
          </div>
        </div>
        <div className="extra content">
          <div className="ui bottom attached button">
            <a href="https://en.wikipedia.org/wiki/Aristotle">
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
