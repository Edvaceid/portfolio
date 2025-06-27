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
          badge="2025"
          title="Mobile Application Developer"
          subTitle="Oppenza (Heraninda Yemek)"
          des="Led the end-to-end UI development process of the Heraninda Yemek mobile application using Flutter and Dart. Faithfully translated Figma designs into functional UI, implementing key flows such as user authentication, homepage, restaurant and menu details, cart, order confirmation, address and payment management, and order completion. Created stable and secure navigation flows using GoRouter and Navigator APIs. Designed and implemented numerous reusable widgets to enhance the modularity of the project. Improved code quality and provided comprehensive documentation."
        />
        <ResumeCard
          badge="2024"
          title="Mobile Application Developer"
          subTitle="Eterna Technology Inc. | Mersin Technoscope | Technopark"
          des="Collaborated with project managers to integrate various software systems into iOS and Android platforms using WebView and Flutter. Actively participated in the deployment processes for both the App Store and Play Store. Performed mobile testing and took responsibility for transforming project designs into functional Figma UI drafts. Gained valuable experience in team collaboration and professional software development environments."
        />
        <ResumeCard
          badge="2024"
          title="Mobile Application Developer - Intern Computer Engineer - Cybersecurity Department"
          subTitle="Artı ve Artı Technology Services Industry and Trade Inc. | HP & HPE ServiceOne Platinum Partner"
          des="Developed an interactive cybersecurity education and support mobile application within the Cyber Security Department. Implemented secure authentication via Firebase Authentication, and managed data storage using Firestore and Firebase Storage. Enriched the learning experience with features like slides, quizzes, rank systems, and AI integration. Additionally, created a communication mechanism that allowed users to connect with professionals for support and guidance."
        />
        <ResumeCard
          badge="2023"
          title="Mobile Application Developer - Intern Computer Engineer - ERP/CRM Development"
          subTitle="Sim Information Technologies | AKINSOFT Mersin Regional Dealer"
          des="Actively participated in the development of a comprehensive Enterprise Resource Planning (ERP) mobile application for company executives managing a vehicle fleet. Designed separate login flows for administrators and employees using Flutter. Developed critical ERP modules such as vehicle tracking, employee tracking, income-expense management, location tracking, and request handling — all aimed at improving operational efficiency."
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
