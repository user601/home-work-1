import React from "react";
class ClassComp extends React.Component {
  render() {
    const options = {
      //weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (
      <div className="profile-wrapper">
        <h1 className="title">
          Привет,<b>{this.props.name}</b>
        </h1>
        <p>
          Дата регистрации:{" "}
          {this.props.registredAt.toLocaleDateString("ru-Ru", options)}
        </p>
      </div>
    );
  }
}
export default ClassComp;
