import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [time, setTime] = useState("");

useEffect(() => {
  const getTime = () => {
    const today = new Date();
    const currentTime = today.getHours() + ":" + today.getMinutes();
    console.log(currentTime);
    setTime(currentTime);
  };
  getTime();
}, [])

  return <div>Home</div>;
};

export default Home;
