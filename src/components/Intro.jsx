import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-row pt-10 pb-12 gap-5">
      <div className="nes-container with-title">
        <p className="title">Social</p>
        <div className="lists">
          <ul className="nes-list is-circle text-left text-sm">
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Gmail</li>
          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: "#212529" }}>
        <div className="nes-container with-title is-dark h-min">
          {/* Add this to make it work in dark mode */}
          {/* style={{ backgroundColor: "#1d1917" }} */}
          <p className="title">Hello World</p>
          <p className="text-sm text-left">
            My expertise is in front-end development with technologies like
            React and Three.js. I enjoy creating novel and intuitive user
            experiences for desktop or AR/VR applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
