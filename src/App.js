import React from "react";
import "./App.css";
import Header from "./main/Header/Header";
import Sidebar from "./main/Sidebar/Sidebar";
import Feed from "./main/Feed/Feed";
import Widget from "./main/Widget/Widget";
import Login from "./loginpage/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
