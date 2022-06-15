import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./components/Login";

function App() {
  // pull info from dataStore
  // useSelector is used to pull our selector from slice
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
