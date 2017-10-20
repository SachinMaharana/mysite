import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import favicon from "../favicon.png";

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