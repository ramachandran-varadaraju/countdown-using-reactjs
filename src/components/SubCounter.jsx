import React from "react";

function SubCounter({ value, name }) {
  return (
    <React.Fragment>
      <h3>{value}</h3>
      <span>{name}</span>
    </React.Fragment>
  );
}

export default SubCounter;
