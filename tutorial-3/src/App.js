import "./App.css";
import React from "react";
import Faq from "./components/Faq";
import { tabs } from "../src/tabsData/tabs";

function App() {
  const [activeId, setActiveId] = React.useState(1);

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          {tabs.map((tab) => (
            <Faq
              key={tab.id}
              activeTab={tab.id === activeId}
              onClick={setActiveId}
              {...tab}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
