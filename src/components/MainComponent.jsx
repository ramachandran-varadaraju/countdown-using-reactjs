import React from "react";
import MainCounter from "./MainCounter";

import classes from "./MainComponent.module.css";

function MainComponent() {
  return (
    <div>
      <h1 className={classes.title}>We are coming soon</h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas
        quibusdam unde, asperiores explicabo possimus et magnam culpa obcaecati
        est? Rem pariatur, nesciunt magnam dignissimos iure ut doloremque harum
        voluptas?
      </p>
      <MainCounter />
    </div>
  );
}

export default MainComponent;
