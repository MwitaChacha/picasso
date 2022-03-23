import React from 'react'
import jump from "../assets/jump.png";
import football from "../assets/football.png";


const Third = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div>
        <img src={jump} alt="" />
        <p>"I'll be a dreamer till the day I die"</p>
      </div>
      <div>
        {" "}
        <img src={football} alt="" />
        <p>"I'll be a dreamer till the day I die"</p>{" "}
      </div>
    </div>
  );
}

export default Third