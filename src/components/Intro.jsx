import React from "react";

const Intro = () => {
  return (
    <div className="flex md:flex-row flex-col pt-5 gap-5">
      <div className="nes-container">
        <div className="flex flex-row md:flex-col justify-between items-center h-full w-full">
          <a
            class="nes-icon github hover:opacity-70"
            href="https://github.com/ethanalvizo"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            class="nes-icon linkedin hover:opacity-70"
            href="https://linkedin.com/in/ethan-alvizo"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            class="nes-icon gmail hover:opacity-70"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ethanalvizo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            class="nes-icon hover:opacity-70"
            href="/assets/Ethan_s_Resume.pdf"
            download
          >
            <img src="/assets/resume.png" alt="" />
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: "#212529" }}>
        <div className="nes-container with-title is-dark">
          {/* Add this to make it work in dark mode */}
          {/* style={{ backgroundColor: "#1d1917" }} */}
          <p className="title">
            <img
              src="/assets/software.png"
              alt=""
              className="nes-icon mr-6 p-px"
            />
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
