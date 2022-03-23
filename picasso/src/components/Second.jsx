import React from 'react'
import sunflower from "../assets/sunflower.png";
import sparkles from "../assets/sparkles.png";



const Second = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen pic-section">
      <div className=" text-sm sunflower-section h-full">
        <div className="items-center">
          <img className="w-60 m-auto shadow-2xl" src={sunflower} alt="" />
          <p>
            "You've made it to my thoughts, welcome. You are going to stay for a
            while"
          </p>
        </div>
      </div>
      <div className=" text-sm sparkles-section h-full content-center">
        <img className="w-64 mx-auto shadow-2xl" src={sparkles} alt="" />
        <p>
          "Your battles inspired me; not the obvious material battles, but the
          ones that were won behind your forehead"
        </p>
      </div>
    </div>
  );
}

export default Second