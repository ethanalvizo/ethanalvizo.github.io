import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="-mt-12">
      <section className="message-list">
        <section className="message -left flex flex-row w-full">
          <div className="flex items-end">
            <img
              src={"/assets/ethan-pixel.png"}
              alt=""
              className="nes-avatar is-large"
            />
          </div>
          <div
            className="nes-balloon from-left text-sm"
            style={{ width: "100%" }}
          >
            {/* <p>
              Welcome! My name is Ethan and I'm a Biomedical Engineering Student
              at the University of Waterloo.
            </p> */}
            <TypeAnimation
              sequence={[
                "Welcome!",
                1000,
                "Welcome! My name is Ethan",
                1000,
                "Welcome! My name is Ethan and I'm a Biomedical Engineering Student at the University of Waterloo.",
              ]}
              wrapper="p"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Header;
