import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-row pt-10 pb-12 gap-5">
      <div className="nes-container">
        <div className="flex flex-col justify-between items-center h-full w-full">
          <i class="nes-icon github"></i>
          <i class="nes-icon linkedin"></i>
          <i class="nes-icon gmail"></i>
          <a class="nes-icon">
            <img src="/assets/curriculum.png" alt="" />
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: "#212529" }}>
        <div className="nes-container with-title is-dark">
          {/* Add this to make it work in dark mode */}
          {/* style={{ backgroundColor: "#1d1917" }} */}
          <p className="title">
            <img src="/assets/software.png" alt="" className="nes-icon mr-6 p-px" />
            Hello World
          </p>
          <p className="text-sm text-left">
            I have a diverse skillset in software, hardware, prototyping, and
            product design. My expertise is in using front-end technologies like
            React or ThreeJS to create engaging and responsive user interfaces.
            I'm leveraging my background in human-computer interaction to create
            novel experiences for desktop, mobile, and VR applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
