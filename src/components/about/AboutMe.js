import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Arda Şevik</h2>
          <p className="text-base leading-6 ">
          A recent graduate of Computer Engineering from Mersin University with hands-on experience in mobile application development, UI design, and cloud-based solutions. Specialized in Flutter and React ecosystems with back-end development knowledge using Firebase and MongoDB. Worked in real-world projects both individually and in teams. Enthusiastic about artificial intelligence, robotics, and IoT technologies.
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
