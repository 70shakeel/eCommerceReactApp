import React, { Component } from "react";
import "./signInStyle.css";
import { signInWithGoogle } from "../Firebase/Utils";
import Buttons from "./Forms/Buttons";

class SignIn extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signInCard">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Buttons onClick={signInWithGoogle}>Sign in with Google</Buttons>
        </form>
      </div>
    );
  }
}

export default SignIn;
