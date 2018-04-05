import React, { Component } from "react";
import Helmet from "react-helmet";
import Uses from "../components/Uses/Uses";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`Uses | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/uses/`} />
        </Helmet>
        <Uses />
      </div>
    );
  }
}

export default AboutPage;
