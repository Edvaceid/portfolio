import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Cyber Security Education and Cooperation Platform"
            category="Mobile Application"
            image={workImgThree}
          />
          <ProjectsCard
            title="Image Processing OpenCV Human Distance Measurement"
            category="Machine Learning"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Smart Pet Collar IOT"
            category="IOT/Mobile Application"
            image={workImgFour}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Logistics Tracking ERP application"
            category="Mobile Application"
            image={workImgOne}
          />
          <ProjectsCard
            title="Online Ordering Customer Analytics Data Mining"
            category="Data Mining"
            image={workImgFive}
          />
          <ProjectsCard
            title="Sonar System"
            category="Robotics"
            image={workImgSix}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
