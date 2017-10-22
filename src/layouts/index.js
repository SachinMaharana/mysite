import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import favicon from "../favicon.png";

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
      <title>Sachin</title>
      <link rel="shortcut icon" type="image/png" href={favicon} />
      />
    </Helmet>

    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      <header>
        <ul
          style={{
            listStyle: `none`,
            float: `right`,
            color: "inherit",
            paddingTop: "0.6rem",
            marginRight: "1.5rem"
          }}
        >
          <ListLink to="#">home</ListLink>
          <ListLink to="#">books</ListLink>
        </ul>
      </header>
      {children()}
    </div>
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <h3>keep coming back.</h3>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
