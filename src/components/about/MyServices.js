import React from "react";
import { FaAppStoreIos, FaPersonBooth, FaRobot } from "react-icons/fa";
import { AiFillMobile, AiOutlineMobile, AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign, SiDatabricks } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<AiOutlineMobile />}
        title="Mobile Application"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<SiDatabricks />}
        title="Exploratory Data Analysis"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<FaRobot />}
        title="IOT/Robotics"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  );
};

export default MyServices;
