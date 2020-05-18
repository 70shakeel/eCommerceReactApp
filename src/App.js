import React, { Component } from "react";
import "./App.css";
import HomePage from "./Components/Visual/HomePage";
import { Route, Redirect } from "react-router-dom";
import Registration from "./Components/Functional/Registration";
import Footer from "./Components/Visual/Footer";
import MainLayout from "./Components/Visual/MainLayout";
import Login from "./Components/Functional/Login";
import { auth, handleUserProfile } from "./Components/Firebase/Utils";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout currentUser={currentUser}>
              <HomePage />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout>
                <Login />
              </MainLayout>
            )
          }
        />
        <Footer />
      </div>
    );
  }
}

export default App;
