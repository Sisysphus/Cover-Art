import React from "react";
import "./IndividualPhilo.css";

function IndividualPhilo({ props }) {
  return (
    <div className="ui card">
      <div className="image-card">
        <img alt={props.name} src={props.img} />
      </div>
      <div class="content">
        <a className="header">{props.name}</a>
        <div className="meta">
          <span className="date">{props.date} </span>
        </div>
        <div className="description">{props.description}</div>
      </div>
      <div className="extra content">
        <div className="ui bottom attached button">
          <a href={props.wikilink}>
            <i className="add icon"></i>
            Click to find out more!
          </a>
        </div>
      </div>
    </div>
  );
}

export default IndividualPhilo;
