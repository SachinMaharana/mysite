import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import favicon from "../favicon.png";
import Typist from "react-typist";

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`
    }}
  >
    <Link
      to={props.to}
      style={{
        color: "hsla(0,0%,0%,0.8)",
        fontFamily: "Libre Baskerville,serif",
        fontWeight: "400",
        wordWrap: "break-word",
        fontKerning: "normal",
        fontSize: "0.92rem"
      }}
    >
      {props.children}
    </Link>
  </li>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sachin</title>
      <link rel="shortcut icon" type="image/png" href={favicon} />
      />
    </Helmet>

    <div
      style={{
        margin: "0 auto",
        width: "100%",
        minHeight: "100vh",
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
        marginTop: "4rem"
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-around",

          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ marginBottom: "0.5rem" }}>sachin maharana.</h1>
          <div>
            <Typist
              avgTypingSpeed={80}
              cursor={{ hideWhenDone: true, blink: true }}
              startDelay={500}
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
              remote software developer
            </Typist>
          </div>
        </div>
        <ul
          style={{
            listStyle: `none`,
            color: "inherit",
            paddingTop: "1rem",
            fontSize: "2rem"
          }}
        >
          <ListLink to="#">home</ListLink>
          <ListLink to="/books">books</ListLink>
        </ul>
      </header>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
