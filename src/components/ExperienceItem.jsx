import React, { useState } from "react";

const ExperienceItem = ({ experience, expand }) => {
  const { year, title, company, stack, summary, details } = experience;

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-5">
      <label className="flex flex-row text-center items-center w-full items-baseline bg-stone-200">
        <input type="radio" className="nes-radio" name="answer" checked />
        <span className="flex flex-row w-full justify-between items-baseline">
          <span className="font-bold text-lg">{title}</span>
          <span className="text-xs">{company}</span>
        </span>
      </label>
      <p className="text-sm mb-3 ml-5 font-semibold">{summary}</p>
      {isExpanded && (
        <div className="lists ml-9 mb-3 font-light text-sm">
          <ul className="nes-list is-circle text-sm">
            {details.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-xs italic ml-5">
        Stack:{" "}
        {stack.map((tech, idx) => (
          <span>
            {tech}
            {idx !== stack.length - 1 && ","}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ExperienceItem;
