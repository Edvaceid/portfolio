import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Arda Şevik</h2>
          <p className="text-base leading-6 ">
          I was born on October 3, 2000, in Izmir, and I recently completed my 4th year in Computer Engineering at Mersin University. I’m interested in mobile app development, robotics, AI, and machine learning. Through my internships and studies, I’ve gained experience in both Front-End and Back-End development, with a focus on Front-End. Currently, I’m improving my Back-End skills with Firebase. I have B2 level English and an A2 driver's license.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            24
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Degree:</span>
            Computer Engineering
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">School:</span>
            Mersin University
          </li>

          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Turkiye
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Job:</span>
            Open To Work
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
