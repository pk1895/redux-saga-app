import React from "react";
import Counter from "./Counter";

const MainComp = () => {
  const voters = ["Lisa Harre", "Andrei Golosov"];

  return (
    <div>
      <h2> Total Votes: </h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
};

export default MainComp;