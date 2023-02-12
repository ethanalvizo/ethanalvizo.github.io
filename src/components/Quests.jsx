import React, { useState, useRef } from "react";
import timeline from "./data/timeline";

const Quests = () => {
  const [selected, isSelected] = useState(0);

  return (
    <div className="nes-container with-title">
      <p className="title">
      <img src="/assets/rpg-game.png" alt="" className="nes-icon mr-6 p-px" />
        Main Quests
      </p>
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

const Quest = ({ experience, idx, selected, setSelected }) => {
  const { title, company } = experience;

  function handleSelectQuest(e) {
    if (e.target.value) setSelected(idx);
  }

  return (
    <div className={selected === idx && "bg-stone-200"}>
      <label className={"flex px-2 py-1"}>
        <input
          type="radio"
          className="nes-radio first:bg-red-500"
          name="quest"
          checked={idx === selected}
          onChange={(e) => handleSelectQuest(e)}
        />
        <span className="flex justify-between w-full items-end">
          <span className="text-sm font-semibold">{title}</span>
          <span className="text-xs italic">{company}</span>
        </span>
      </label>
      {selected === idx && (
        <div className="nes-container with-title pb-3 text-xs mx-5 mb-3 border-2">
          <p className="title text-xs" style={{backgroundColor: "rgb(231 229 228)"}}>Skills</p>
          <div className="lists mb-3">
            <ul className="nes-list is-circle">
              {timeline[idx].details.map((detail, idx) => (
                <li className="mb-2" key={idx}>
                  {detail}
                </li>
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
    </div>
  );
};

export default Quests;
