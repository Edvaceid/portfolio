import React from "react";
import { FaRobot } from "react-icons/fa";
import { AiOutlineMobile,} from "react-icons/ai";
import { SiDatabricks } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<AiOutlineMobile />}
        title="Mobile Application"
        subTitle="I have been coding Flutter/Dart for about 2 years. I can also use RestAPI and external libraries. This enthusiasm, which started in my classes, has also reflected in my professional life."
      />
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I developed projects with .NET in my school projects, but now I am developing myself with React JS. I developed the portfolio you see in front of you with React JS."
      />
      <ServicesCard
        icons={<SiDatabricks />}
        title="Exploratory Data Analysis"
        subTitle="Using Python and related datasets, I can perform analyses on these datasets, support them with machine learning and visualize them with graphs. I have developed a few such projects at my school."
      />
      <ServicesCard
        icons={<FaRobot />}
        title="IOT/Robotics"
        subTitle="I have developed a few useful projects in my school related to the Internet of Things and Robotics. It is a branch that I am very interested in and follow. I can also make the necessary integrations with other software."
      />
    </div>
  );
};

export default MyServices;
