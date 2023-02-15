import React, { useState } from "react";

const SideQuests = () => {
  const [fighter, setFighter] = useState("default");

  const technologies = {
    default: [
      "react.png",
      "nodejs.svg",
      "typescript.png",
      "three-js.svg",
      "unity.svg",
    ],
    "front-end": ["react.png", "html.png", "css.svg", "javascript.svg"], //add figma
    "back-end": ["nodejs.svg", "mongo-db.svg", "firebase.svg"], //add aws and express
    game: ["three-js.svg"],
    hardware: [],
  };

  return (
    <div style={{ backgroundColor: "#212529" }}>
      <div className="nes-container with-title is-dark">
        <p className="title">
          <img src="/assets/dummy.png" alt="" className="nes-icon mr-6 p-px" />
          Training
        </p>
        <div
          style={{
            backgroundColor: "#212529",
            padding: "1rem 1.2rem 1rem 1rem",
            width: "calc(100% + 8px)",
          }}
        >
          <div class="nes-select is-dark">
            <select
              required
              id="default_select"
              onChange={(e) => setFighter(e.target.value)}
            >
              <option value="default">Jack-of-all-Trades</option>
              <option value="front-end">Front-End Fighter</option>
              <option value="back-end">Back-End Berserker</option>
              <option value="game">Game Dev Gunner</option>
              {/* <option value="3">Mobile Mage</option> */}
              <option value="hardware">Hardware Hunter</option>
              {/* <option value="5">Web Dev Wizard/Warrior</option> */}
            </select>
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          {technologies[fighter].map((tech, idx) => (
            <img
              src={`/assets/technology/${tech}`}
              alt=""
              className="nes-icon is-large"
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideQuests;
