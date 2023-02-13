import React from "react";
import timeline from "./data/timeline";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div className="nes-container with-title">
      <p className="title">Completed Quests</p>
      {timeline.map((exp, idx) => (
        <ExperienceItem experience={exp} key={idx} />
      ))}
    </div>
    // <div className="flex flex-col md:flex-row justify-center my-20">
    //   <div className="w-full md:w-7/12">
    //     <Title>Experience</Title>
    //     {timeline.map((exp, idx) => (
    //       <TimelineItem experience={exp} key={idx} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Experience;
