import React from 'react'
import sunflower from "../assets/sunflower.png";
import sparkles from "../assets/sparkles.png";



const Second = () => {
  return (
    <div className="md:flex flex-row justify-around my-20">
      <div className=" text-sm my-8">
        <div className="items-center">
          <img
            className="w-60 h-64 m-auto shadow-2xl object-cover"
            src={sunflower}
            alt=""
          />
          <p className="px-32 my-5 text-xs font-bold text-amber-500">
            You've made it to my thoughts, welcome. You are going to stay for a
            while
          </p>
        </div>
      </div>
      <div className=" text-sm my-8">
        <img
          className="w-60 h-64 m-auto shadow-2xl object-cover"
          src={sparkles}
          alt=""
        />
        <p className="px-32 my-5 text-xs font-bold text-amber-500">
          Your battles inspired me; not the obvious material battles, but the
          ones that were won behind your forehead
        </p>
      </div>
    </div>
  );
}

export default Second