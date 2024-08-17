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
      <div className="p-6 w-full flex flex-col items-start gap-10 text-3xl text-[#ccc]">
        <div className="w-full flex justify-between items-center border-b-[2px] border-b-zinc-800 py-8">
          <span className="bg-designColor text-gray-700 text-3xl font-titleFont font-bold px-6 rounded-md">
            Address:
          </span>
          <span className="text-right w-2/3">Istanbul / Pendik</span>
        </div>
        <div className="w-full flex justify-between items-center border-b-[2px] border-b-zinc-800 py-8">
          <span className="bg-designColor text-gray-700 text-3xl font-titleFont font-bold px-6 rounded-md">
            Phone:
          </span>
          <span className="text-right w-2/3">+90 545 572 3019</span>
        </div>
        <div className="w-full flex justify-between items-center border-b-[2px] border-b-zinc-800 py-8">
          <span className="bg-designColor text-gray-700 text-3xl font-titleFont font-bold px-6 rounded-md">
            Email:
          </span>
          <a href="mailto:ardasevikk@gmail.com" className="text-right w-2/3 hover:text-designColor">
            ardasevikk@gmail.com
          </a>
        </div>
        <div className="w-full flex justify-between items-center border-b-[2px] border-b-zinc-800 py-8">
          <span className="bg-designColor text-gray-700 text-3xl font-titleFont font-bold px-6 rounded-md">
            Job:
          </span>
          <span className="text-right w-2/3">
            {text}
            <Cursor cursorStyle="|" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
