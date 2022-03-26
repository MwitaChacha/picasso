import React from 'react'
import jump from "../assets/jump.png";
import trishsunset from "../assets/trishsunset.png";
import tea from "../assets/tea.png";
import eva from "../assets/eva.png";
import happy from "../assets/happy.png";
import rubik from "../assets/rubik.png";
import birdssunset from "../assets/birdssunset.png";
import dubs from "../assets/dubs.png";
import chalel from "../assets/DSC_0070.jpg";
import twitter from "../assets/twitter (1).png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram (1).png";
import github from "../assets/github.png";

const Third = () => {
  return (
    <div className="">
      <div className="text-center text-xs">
        <img className="mx-auto shadow-2xl w-80" src={jump} alt="" />
        <p className="px-32 my-5 text-xs font-bold text-amber-500">
          When me time is done; will I have done enough? Will they remember me?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-28">
        <div>
          <img className="mx-auto shadow-2xl w-96" src={trishsunset} alt="" />
          <p className="px-32 my-5 text-xs font-bold text-amber-500">
            There are artists who don't realize they are artists
          </p>
        </div>
        <div>
          <img className="mx-auto shadow-2xl w-80" src={tea} alt="" />
          <p className="px-32 my-5 text-xs font-bold text-amber-500">
            I'll be a dreamer till the day I die
          </p>
        </div>
      </div>
      <div className="text-center text-xs">
        <img className="mx-auto shadow-2xl w-80" src={eva} alt="" />
        <p className="px-32 my-5 text-xs font-bold text-amber-500">
          You are not perfect. You are a working progress. You are a working
          masterpiece
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-28">
        <div>
          <img className="mx-auto shadow-2xl w-80" src={rubik} alt="" />
          <p className="px-32 my-5 text-xs font-bold text-amber-500">
            What do we do with all this future?
          </p>
        </div>
        <div>
          <img className="mx-auto shadow-2xl w-80" src={happy} alt="" />
          <p className="px-32 my-5 text-xs font-bold text-amber-500">
            I was waiting for something extraodinary to happen. But as the year
            wasted on, nothing ever did until I caused it.
          </p>
        </div>
      </div>
      <div className="text-center text-xs">
        <img className="mx-auto shadow-2xl w-96" src={birdssunset} alt="" />
        <p className="px-32 my-5 text-xs font-bold text-amber-500">
          Not I, nor anyone else can travel that road for you. You must travel
          it by yourself
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-14">
        <div>
          <img className="mx-auto shadow-2xl w-80" src={dubs} alt="" />
          <p className="px-32 my-5 text-xs font-bold text-amber-500">
            I am greater than I even think I am. And so are you.
          </p>
        </div>
        <div>
          <img className="mx-auto shadow-2xl w-80" src={chalel} alt="" />
          <p className="px-32 my-5 text-xs font-bold text-amber-500">
            Zechariah 4:10.
            <br /> Do not despise these small beginnings
          </p>
        </div>
      </div>
      <div className="text-center text-xs pb-10">
        <hr className="w-1/2 border-1 mx-auto my-10 border-black" />
        <p className="px-32 my-5 text-xs font-bold">
          Love my work, want to collaborate/work with me or just want to say hi?
        </p>
        <a
          rel="noreferrer"
          href="mailto:jonahhchacha@gmail.com"
          target="_blank"
        >
          <button className="py-3 px-8 text-white bg-black font-bold text-sm">
            Shoot Me Message
          </button>
        </a>
        <div className="my-8">
          <p className="font-bold">Let's be friends!</p>
          <div className="flex justify-center py-5">
            <div className="px-4">
              <a
                target="_blank"
                href="https://www.instagram.com/mwi_tah/"
                rel="noreferrer"
              >
                <img className="w-4" src={instagram} alt="" />
              </a>
            </div>
            <div className="px-4">
              <a
                target="_blank"
                href="https://twitter.com/Chacha1kanobi"
                rel="noreferrer"
              >
                <img className="w-4" src={twitter} alt="" />
              </a>
            </div>
            <div className="px-4">
              <a
                target="_blank"
                href="https://github.com/MwitaChacha"
                rel="noreferrer"
              >
                <img className="w-4" src={github} alt="" />
              </a>
            </div>
            <div className="px-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jonathan-chacha-19b154206/"
                rel="noreferrer"
              >
                {" "}
                <img className="w-4" src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third