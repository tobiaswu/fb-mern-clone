import React, { useEffect } from "react";
import "./App.css";
import Header from "./main/Header/Header";
import Sidebar from "./main/Sidebar/Sidebar";
import Feed from "./main/Feed/Feed";
import Widget from "./main/Widget/Widget";
import Login from "./loginpage/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login } from "./main/redux/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        alert("error");
      }
    });
  }, [dispatch]);

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
