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
        I'm a 4th year engineering student at the University of Waterloo
        that's passionate about software development and human-computer interaction
        (HCI).
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        My expertise is in front-end web development with technologies like React. I can create responsive and visually appealing UIs for desktop/mobile applications. But I am still comfortable with back-end principles like creating REST APIs with Node/Express. 
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Currently, I'm learning more about AR/VR development with technologies like Unity. Check out my latest projects and experiences below!
      </p>
    </div>
  );
};

export default Intro;
