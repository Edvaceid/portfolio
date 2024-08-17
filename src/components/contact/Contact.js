import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Title from "../home/Title";

const Contact = () => {
  const [text] = useTypewriter({
    words: ["Open To Work"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col items-center gap-8 text-lg md:text-xl lg:text-2xl text-[#ccc]">
        <div className="w-full flex flex-col items-center border-b-[1px] border-b-zinc-800 py-4 lg:py-6">
          <span className="bg-designColor text-gray-700 text-lg md:text-xl lg:text-2xl font-titleFont font-bold px-4 lg:px-6 rounded-md mb-2">
            Address:
          </span>
          <span className="text-center">Istanbul / Pendik</span>
        </div>
        <div className="w-full flex flex-col items-center border-b-[1px] border-b-zinc-800 py-4 lg:py-6">
          <span className="bg-designColor text-gray-700 text-lg md:text-xl lg:text-2xl font-titleFont font-bold px-4 lg:px-6 rounded-md mb-2">
            Phone:
          </span>
          <span className="text-center">+90 545 572 3019</span>
        </div>
        <div className="w-full flex flex-col items-center border-b-[1px] border-b-zinc-800 py-4 lg:py-6">
          <span className="bg-designColor text-gray-700 text-lg md:text-xl lg:text-2xl font-titleFont font-bold px-4 lg:px-6 rounded-md mb-2">
            Email:
          </span>
          <a href="mailto:ardasevikk@gmail.com" className="text-center hover:text-designColor">
            ardasevikk@gmail.com
          </a>
        </div>
        <div className="w-full flex flex-col items-center border-b-[1px] border-b-zinc-800 py-4 lg:py-6">
          <span className="bg-designColor text-gray-700 text-lg md:text-xl lg:text-2xl font-titleFont font-bold px-4 lg:px-6 rounded-md mb-2">
            Job:
          </span>
          <span className="text-center">
            {text}
            <Cursor cursorStyle="|" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
