import React, { useState, useEffect, Fragment } from "react";
import "./Home.css";
import photos from "../../constants/constants";
import { motion } from "framer-motion";
import SquareLoader from "react-spinners/SquareLoader";

const Home = () => {
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);


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
    }, 3000);
  });

 
  if (!loading) {
    return (
      <div className="text-center items-center">
        <SquareLoader className="mt-52" size={130} color={"#BB8082"} />
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
                      whileHover={{ scale: 1.01 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                      className="img mt-20 shadow-xl mx-auto"
                      key={item.id}
                      src={item.image}
                      alt=""
                    />
                    <motion.p
                      initial={{
                        x: 50,
                      }}
                      whileInView={{
                        x: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-xs text-center px-20 mt-3 text-yellow-600"
                    >
                      "{item.quote}"
                    </motion.p>
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
