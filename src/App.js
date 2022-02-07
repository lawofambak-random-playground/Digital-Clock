import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [time, setTime] = useState("");
  const [color, setColor] = useState("clock");

  const changeToRed = () => {
    setColor("red-clock");
  };

  const changeToBlue = () => {
    setColor("blue-clock");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      var meridiem = "AM";

      if (hour === 0) {
        hour = 12;
      }

      if (hour > 12) {
        hour = hour - 12;
        meridiem = "PM";
      }

      hour = (hour < 10) ? "0" + hour.toString() : hour.toString();
      minute = (minute < 10) ? "0" + minute.toString() : minute.toString();
      second = (second < 10) ? "0" + second.toString() : second.toString();

      var time = hour + ":" + minute + ":" + second + " " + meridiem;

      setTime(time);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <div className={color}>{time}</div>
      <button className="red-button" onClick={changeToRed}>~RED~</button>
      <button className="blue-button" onClick={changeToBlue}>~BLUE~</button>
    </div>
  );
}

export default App;
