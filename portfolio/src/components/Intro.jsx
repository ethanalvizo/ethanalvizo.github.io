import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-12">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Ethan Alvizo
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Biomedical Engineering Student & Software Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm Ethan a 4th year engineering student at the University of Waterloo
        passionate about software development and human-computer interaction
        (HCI). I've done 5 coop placements as a software developer, primarily in
        full-stack web applications.
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        My expertise is in front-end development with technologies like React
        and Angular but I am very comfortable with back-end principles like creating REST APIs with Node and Express. 
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Currently, I am expanding my skills in AR/VR and game development with technologies like Unity. Check out my latest experiences and projects below!
      </p>
    </div>
  );
};

export default Intro;
