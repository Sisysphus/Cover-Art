import React from "react";
import "../../App.css";
import IndividualPhilo from "./IndividualPhilo";
import { PhilosopherInfo } from "../SeedData";

const Philosophers = () => {
  return (
    <div className="ui-container">
      {PhilosopherInfo.map((philosopher) => (
        <IndividualPhilo props={philosopher} />
      ))}
    </div>
  );
};

export default Philosophers;
