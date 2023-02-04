import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  // style={{ marginTop: "-7vh" }}
  return (
    <section className="message-list" style={{ marginTop: "-7vh" }}>
      <section className="message -left flex flex-row items-end">
        <img
          src={
            "http://www.avatarsinpixels.com/minipix/eyJTaG9lcyI6IjEiLCJQYW50cyI6IjEiLCJUb3AiOiIxMyIsInNraW5Ub25lIjoiYTc3MTVmIiwiZXllc1RvbmUiOiI0NDIxMTAiLCJwYW50c1RvbmUiOiIwNzI1NWEiLCJ0b3BUb25lIjoiZWYwMDAwIn0=/1/show.png"
          }
          alt=""
          style={{ minWidth: "12%", height: "80%" }}
          // className="bg-red-500"
        />

        <div
          className="nes-balloon from-left text-sm"
          style={{
            // minHeight: "100%",
            // minWidth: "70%",
            borderImageRepeat: "stretch",
          }}
        >
          <TypeAnimation
            sequence={[
              "Welcome!",
              800,
              "Welcome! My name is Ethan",
              250,
              "Welcome! My name is Ethan and I'm a Biomedical Engineering Student at the University of Waterloo.",
              400,
            ]}
            wrapper="p"
          />
        </div>
      </section>
    </section>
  );
};

export default Header;
