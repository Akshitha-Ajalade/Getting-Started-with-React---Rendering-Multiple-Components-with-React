import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const heading = "E-commerse website";
  const description = "i want to make a website about some pizza and coffee";
  return (
    <div id="main">
      <h1 data-ns-test="project-name">{heading}</h1>
      <p data-ns-test="project-description">{description}</p>
    </div>
  );
};

export default App;
