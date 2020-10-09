import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt="facebook logo"
        />
        <img
          src="https://logosmarken.com/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt="facebook text logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
