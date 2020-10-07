import React from "react";
import "./App.css";
import Header from "./main/Header/Header";
import Sidebar from "./main/Sidebar/Sidebar";
import Feed from "./main/Feed/Feed";
import Widget from "./main/Widget/Widget";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
