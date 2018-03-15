import React, { Component } from "react";
import Overdrive from "react-overdrive"
import "./WorkLogo.scss";

class WorkLogo extends Component {
  
  render() {
    const { workInfo } = this.props;
    return (
      
      <Overdrive id={workInfo.title} duration={250} >
        <div>
          <div
            style={{
              backgroundImage: `url(${workInfo.logo})`,
              backgroundSize: workInfo.logoWidth || '80%'
            }}
            className="logo"
          />
        </div>
      </Overdrive>

    );
  }
}

export default WorkLogo;
