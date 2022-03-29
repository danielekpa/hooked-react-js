import React from "react";
import {useNavigate} from "react-router-dom";
// import Home from "../pages/Home";

function Header(props) {
  const navigate = useNavigate();
  const goToHome = (e) => {
    navigate("/hooked-react-js/");
  };

  return (
    <header className="App-header" onClick={goToHome}>
      <h1>{props.text}</h1>
    </header>
  );
}

export default Header;
