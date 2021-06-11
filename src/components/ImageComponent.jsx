import React from "react";

import classes from "./ImageComponent.module.css";

import construction from "../coming-soon.png";

function ImageComponent() {
  return (
    // <div className={classes.image}>
    <div>
      <img className={classes.img} src={construction} alt="coming soon" />
    </div>
  );
}

export default ImageComponent;
