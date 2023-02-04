import React, { useState, useRef } from "react";
import timeline from "./data/timeline";

const Quests = () => {
  const [selected, isSelected] = useState(0);

  return (
    <div className="nes-container with-title">
      <p className="title">Completed Quests</p>
      <div className="flex flex-col gap-2">
        {timeline.map((exp, idx) => (
          <Quest
            experience={exp}
            key={idx}
            idx={idx}
            selected={selected}
            setSelected={isSelected}
          />
        ))}
      </div>
    </div>
  );
};

const Quest = ({ experience, idx, selected, setSelected, questRef }) => {
  const { title, company } = experience;

  function handleSelectQuest(e) {
    if (e.target.value) setSelected(idx);
  }

  return (
    <>
      <label
        className={`flex whitespace-nowrap p-2${
          selected === idx ? "bg-stone-200" : ""
        }`}
      >
        <input
          type="radio"
          className="nes-radio"
          name="quest"
          checked={idx === selected}
          onChange={(e) => handleSelectQuest(e)}
        />
        <span className="flex justify-between w-full text-end">
          <span className="text-sm">{title}</span>
          <span className="text-xs italic">{company}</span>
        </span>
      </label>
      {selected === idx && (
        <div className="nes-container with-title">
          <p className="title">Rewards</p>
          <div className="lists mb-3">
            <ul className="nes-list is-circle text-sm">
              {timeline[idx].details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs italic">
            Stack:{" "}
            {timeline[selected].stack.map((tech, idx) => (
              <span key={idx}>
                {tech}
                {idx !== timeline[selected].stack.length - 1 && ","}{" "}
              </span>
            ))}
          </p>
        </div>
      )}
    </>
  );
};

export default Quests;
