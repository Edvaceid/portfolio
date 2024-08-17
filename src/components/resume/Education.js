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
          title="Flutter Developer / Intern Computer Engineer (Cyber Security Department)"
          subTitle="Arti ve Arti Technology Services Industry and Trade Inc."
          des="I was asked to develop a cyber security training/assistance application. I was asked to provide Authentications kept with FireBase Authentication, photos kept secure with FireStore and Storage and data, slides, quizzes, rank system and artificial intelligence integration, making learning fun, but also I offered an application where they can get help from professionals on the platform at any time"
        />
        <ResumeCard
          badge="2023"
          title="Intern Computer Engineer - ERP/CRM Development"
          subTitle="Sim Information Technologies - AKINSOFT Mersin Regional Dealer"
          des="When I started my internship, it coincided with the time when the company was about to start a project. This project was to develop an ERP (Enterprise Resource Planning) application for a group of managers who had a fleet of vehicles in their company. In the application developed with Flutter, managers and employees use separate login methods, and many things such as vehicle tracking, employee tracking, income and expense tracking, location tracking, requests, etc. can be viewed with a single touch."
        />
        <ResumeCard
          badge="2021 - 2023"
          title="Barista"
          subTitle="Chain and Boutique Coffee Companies"
          des="During my student life, I worked as a barista in many chain coffee companies and boutique cafes in order to make pocket money for myself. For example, Sabiha Gökçen Airport International Department Starbucks, Sayapark Soulmate... I have a total of more than one year of experience as a barista"
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
