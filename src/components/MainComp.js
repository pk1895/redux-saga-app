import React from "react";
import { useSelector } from "react-redux";

const MainComp = () => {
  const users = useSelector((state) => state.userReducer.user);
  console.log(users);

  const name = users ? users[0].name : "";

  return (
    <div>
      <h2> Hello World </h2>
      <p>{name}</p>
    </div>
  );
};

export default MainComp;
