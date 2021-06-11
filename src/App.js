import React from "react";

import classes from "./App.module.css";

import MainComponent from "./components/MainComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <MainComponent />
        <a href="/#" className={classes.btn}>
          Notify me
        </a>
      </div>
      <div className={classes.image}>
        <ImageComponent />
      </div>
    </div>
  );
}

export default App;
