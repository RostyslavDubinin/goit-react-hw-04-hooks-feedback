import React from "react";

const Section = ({ title, children }) => (
  <div className="Statistics">
    <h1>{title}</h1>
    {children}
  </div>
);

export default Section;
