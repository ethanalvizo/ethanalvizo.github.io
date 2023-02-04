import React from "react";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="flex flex-row pt-20 pb-12 gap-5">
      <div className="nes-container with-title">
        <p className="title">Skills</p>
        <div className="lists">
          <ul className="nes-list is-circle text-left text-sm">
            <li>React</li>
            <li>Three.js</li>
            <li>Node.js</li>
            <li>D3.js</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
      <div className="py-px" style={{ backgroundColor: "#212529" }}>
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
      {/* <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Ethan Alvizo
      </h1>
      <p className=" font-press-start">
        <TypeAnimation
          sequence={[
            "Biomedical Engineer",
            1000,
            "Biomedical Engineer & Software Developer",
            1000,
          ]}
          wrapper="p"
        />
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a 4th year engineering student at the University of Waterloo that's
        passionate about software development and human-computer interaction
        (HCI).
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        My expertise is in front-end web development with technologies like
        React. I can create responsive and visually appealing UIs for
        desktop/mobile applications. But I am still comfortable with back-end
        principles like creating REST APIs with Node/Express.
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Currently, I'm learning more about AR/VR development with technologies
        like Unity. Check out my latest projects and experiences below!
      </p> */}
    </div>
  );
};

export default Intro;
