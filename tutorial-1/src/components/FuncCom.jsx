import React from "react";

const FuncCom = (props) => {
  const options = {
    //weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="profile1-wrapper">
      <h1 className="title">
        Привет, <b>{props.name}</b>
      </h1>
      <p>
        дата регистрации:
        {props.registredAt.toLocaleDateString("ru-Ru", options)}
      </p>
    </div>
  );
};
export default FuncCom;
