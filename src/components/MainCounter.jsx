import React, { useEffect, useState } from "react";
import SubCounter from "./SubCounter";

import classes from "./MainCounter.module.css";

import countDown from "../utils/getDate";

function MainCounter() {
  const [finalDate, setFinalDate] = useState([]);

  let futureDate = new Date("jul 1, 2021 00:00:00:").getTime();
  // let finalDate = countDown(futureDate);

  useEffect(() => {
    let inter = setInterval(() => {
      setFinalDate(countDown(futureDate));
    }, 1000);
    return () => {
      clearInterval(inter);
    };
  }, [futureDate]);

  return (
    <div className={classes["count-down"]}>
      {finalDate.map((item) => (
        <div key={item.id} className={classes.box}>
          <SubCounter name={item.name} value={item.value} />
        </div>
      ))}
    </div>
  );
}

export default MainCounter;
