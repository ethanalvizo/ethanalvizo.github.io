import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="">
      <img src={"/assets/new-york.webp"} style={{ width: "100%" }} />
      <section className="message-list">
        <section class="message -left flex flex-row">
          <i>
            <img
              src={"/assets/ethan-pixel.png"}
              alt=""
              width={60}
              className=""
            />
          </i>
          <div class="nes-balloon from-left text-sm ">
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
