import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill} from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import CV from "../../assets/ardasevikcv.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Flutter Developer", "Python Developer", "Frontend Developer", "Machine Learning", "Data Mining", "Robotics", "Electronics"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Arda ŞEVİK</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://github.com/edvaceid" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://linkedin.com/in/ardasevik" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://www.youtube.com/@arda6566" target="_blank" rel="noreferrer">
                <SiYoutubemusic />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://instagram.com/edvaceid" target="_blank" rel="noreferrer">
                <FiInstagram />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="mailto:ardasevikk@gmail.com" target="_blank" rel="noreferrer">
                <FiMail />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 text-sm text-[#ccc] py-2 border-b-[1px] border-b-zinc-800 mt-[-32px]">
          <div className="flex items-center gap-2">
            <span className="bg-designColor text-gray-700 text-xs font-titleFont font-medium px-2 py-1 rounded-md">
              <FiMapPin />
            </span>
            <span>Istanbul / Pendik</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-designColor text-gray-700 text-xs font-titleFont font-medium px-2 py-1 rounded-md">
              <FiPhone />
            </span>
            <span>+90 545 572 3019</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-designColor text-gray-700 text-xs font-titleFont font-medium px-2 py-1 rounded-md">
              <FiMail />
            </span>
            <span>ardasevikk@gmail.com</span>
          </div>
        </div>
        <div className="flex h-24">
          <a
            href={CV}
            target="_blank"
            className="w-full border-t-[1px] border-t-zinc-800 text-lg tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
            download="Arda_Sevik_CV.pdf"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
