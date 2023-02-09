import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-row pt-10 pb-12 gap-5">
      <div className="nes-container with-title">
        <p className="title">Social</p>
        <div className="flex flex-col justify-between items-center h-full">
          <i class="nes-icon github"></i>
          <i class="nes-icon linkedin"></i>
          <i class="nes-icon gmail"></i>
        </div>
      </div>
      <div style={{ backgroundColor: "#212529" }}>
        <div className="nes-container with-title is-dark">
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
