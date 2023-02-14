import React from "react";

const Inventory = () => {
  const technologies = [
    "html.png",
    "css.svg",
    "javascript.svg",
    "typescript.png",
    "react.png",
    "nodejs.svg",
    "git.svg",
    "three-js.svg",
    "unity.svg",
    "mongo-db.svg",
    "firebase.svg",
  ];

  return (
    <div className="nes-container with-title">
      <p className="title">Inventory</p>
      <div className="flex justify-evenly">
        {technologies.map((tech, idx) => (
          <img
            src={`/assets/technology/${tech}`}
            alt=""
            className="nes-icon is-large"
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
