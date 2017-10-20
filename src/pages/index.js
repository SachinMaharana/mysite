import React from "react";
import Link from "gatsby-link";
import Typist from "react-typist";

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            margin: "6rem 0rem 10rem 1rem",
            maxWidth: 600
          }}
        >
          <h1>sachin maharana.</h1>
          <div>
            <Typist
              avgTypingSpeed={80}
              cursor={{ hideWhenDone: true, blink: true }}
              startDelay={1600}
            >
              {/* son
              <Typist.Delay ms={500} />
              <Typist.Backspace count={5} delay={1000} />
              <Typist.Delay ms={750} />
              brother
              <Typist.Delay ms={500} />
              <Typist.Backspace count={7} delay={1000} />
              <Typist.Delay ms={1250} />
              friend 
              <Typist.Delay ms={500} />
              <Typist.Backspace count={6} delay={1000} />
              <Typist.Delay ms={1250} />*/}
              software developer
            </Typist>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
