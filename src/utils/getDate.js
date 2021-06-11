const countDown = (futureDate) => {
  let currentDate = new Date().getTime();

  let gap = futureDate - currentDate;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  let finalDate = [
    { name: "Day", value: d, id: Math.random() * 10 },
    { name: "Hour", value: h, id: Math.random() * 10 },
    { name: "Month", value: m, id: Math.random() * 10 },
    { name: "Second", value: s, id: Math.random() * 10 },
  ];

  return finalDate;
};

export default countDown;
