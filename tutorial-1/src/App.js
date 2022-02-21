import "./App.css";
import React from "react";
import FuncCom from "./components/FuncCom";
import ClassComp from "./components/ClassComp";
function App() {
  return (
    <div className="App">
      <FuncCom name="Вася!" registredAt={new Date(2021, 5, 22)} />
      <ClassComp name="Вася!" registredAt={new Date(2022, 5, 22)} />
    </div>
  );
}

export default App;
