import React from "react";
import cybEduPortfolio from "../../assets/work/cybEduPortfolio.png";
import dataMiningPortfolio from "../../assets/work/dataMiningPortfolio.png";
import fastLojistikPortfolio from "../../assets/work/fastLojistikPortfolio.png";
import imageProcessingPortfolio from "../../assets/work/imageProcessingPortfolio.png";
import petLocatorPortfolio from "../../assets/work/petLocatorPortfolio.png";
import radarSystemPortfolio from "../../assets/work/radarSystemPortfolio.png";
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
            image={cybEduPortfolio} // Yeni resim burada
          />
          <ProjectsCard
            title="Image Processing OpenCV Human Distance Measurement"
            category="Machine Learning"
            image={imageProcessingPortfolio} // Yeni resim burada
          />
          <ProjectsCard
            title="Smart Pet Collar IOT"
            category="IOT/Mobile Application"
            image={petLocatorPortfolio} // Yeni resim burada
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Logistics Tracking ERP application"
            category="Mobile Application"
            image={fastLojistikPortfolio} // Yeni resim burada
          />
          <ProjectsCard
            title="Online Ordering Customer Analytics Data Mining"
            category="Data Mining"
            image={dataMiningPortfolio} // Yeni resim burada
          />
          <ProjectsCard
            title="Sonar System"
            category="Robotics"
            image={radarSystemPortfolio} // Yeni resim burada
          />
        </div>
      </div>
    </div>
  );
};


export default Projects;
