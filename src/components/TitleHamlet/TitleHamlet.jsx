import React from "react";
import Helmet from "react-helmet";
function TitleHamlet({ title }) {
  return (
    <Helmet>
      <title> {title} </title>
    </Helmet>
  );
}

export default TitleHamlet;
