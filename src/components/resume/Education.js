import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full flex flex-col gap-10 px-6">
      {/* =============== Experience Section =================== */}
      <div className="w-full">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2024"
          title="Mobile Application Developer"
          subTitle="Eterna Technology Inc. | Mersin Technoscope | Technopark"
          des="Accompanied by our project managers, I undertook the integration of the developed/developed/to-bedeveloped software into IOS and Android operating systems with WebView and Flutter, publishing in AppStore and Play Store, mobile environment testing and Figma designs of the developed software. Here I experienced real teamwork and professional environment."
        />
        <ResumeCard
          badge="2024"
          title="Mobile Application Developer - Intern Computer Engineer - Cybersecurity Department"
          subTitle="Artı ve Artı Technology Services Industry and Trade Inc. | HP & HPE ServiceOne Platinum Partner"
          des="I was tasked to develop a cyber security training/assistance application. I provided users with authentications kept with FireBase Authentication, photos and data kept safe with FireStore and Storage, slides, tests, rank system and artificial intelligence integration to make learning fun and at the same time they can get help from professionals on the platform at any time."
        />
        <ResumeCard
          badge="2023"
          title="Mobile Application Developer - Intern Computer Engineer - ERP/CRM Development"
          subTitle="Sim Information Technologies | AKINSOFT Mersin Regional Dealer"
          des="The period when I started my internship coincided with the time when the company was about to start a project. This project was to develop an ERP (Enterprise Resource Planning) application for a group of managers who had a fleet of vehicles in their company. In the application developed with Flutter, managers and employees use separate login methods, and many things such as vehicle tracking, employee tracking, income and expense tracking, location tracking, requests, etc. can be viewed with a single touch."
        />
      </div>

      {/* =============== Education Section =================== */}
      <div className="w-full">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019-2024"
          title="Mersin University"
          subTitle="Mersin / Turkiye"
          des="I studied Computer Engineering here and completed my bachelor's degree."
        />
        <ResumeCard
          badge="2014-2018"
          title="Oguz Fen Bilimleri High School"
          subTitle="Istanbul / Turkiye"
          des="I completed my high school education here."
        />
      </div>
    </div>
  );
};

export default Education;
