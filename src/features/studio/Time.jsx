import { useEffect, useState } from "react";

const options = {
  second: "numeric",
  minute: "numeric",
  hour: "numeric",
  day: "numeric",
  weekday: "long",
  month: "short",
  year: "numeric",
};

const locale = navigator.language;

const Time = () => {
  const [time, setTime] = useState();

  setInterval(() => {
    const date = new Date();
    const time = new Intl.DateTimeFormat(locale, options).format(date);
    setTime(time);
  }, 1000);

  return <div>{time}</div>;
};

export default Time;
