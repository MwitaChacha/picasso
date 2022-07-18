import React, { useState, useEffect } from "react";
import "./Home.css";
import photos from "../../constants/constants";
import { motion } from "framer-motion";

const Home = () => {
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTime = () => {
      const today = new Date();
      const currentTime = today.getHours() + ":" + today.getMinutes();
      console.log(currentTime);
      setTime(currentTime);
    };
    getTime();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  });

  if (!loading) {
    return (
      <div>
        <h1 className="welcome text-9xl">hi</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid grid-cols-2 items-cente ">
          <div className="px-10 mt-32 ml-5">
            <div className="fixed">
              <motion.div
                animate={{
                  y: 0,
                }}
                initial={{
                  y: 300,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <h1 className="text-5xl font-extrabold text-gray-800">
                  THE YEAR OF CHACHA
                </h1>
                <p className="intro-text text-sm mt-10">
                  I will be great one day, and so will you.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="">
            <div className="">
              {photos.map((item) => {
                return (
                  <>
                    {" "}
                    <motion.img
                      whileInView={{
                        x: 0,
                      }}
                      initial={{
                        x: -50,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}

                      className="img my-10 shadow-xl"
                      key={item.key}
                      src={item.image}
                      alt=""
                    />
                    {/* <p className="text-xs text-left px-20">"{item.quote}"</p> */}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex font-medium time  p-10">
          <p>NAIROBI, KE</p>
          <p className="ml-5">{time}</p>
        </div>
        <div className="scroll p-10">
          <p className="animate-pulse text-sm">Scroll to exlore</p>
        </div>
      </div>
    );
  }
};

export default Home;
