import React, { Component } from "react";
import Link from "gatsby-link";
import WorkLogo from "../WorkLogo/WorkLogo"
import "./WorkGrid.scss";

class WorkGrid extends Component {
  
  getWorkList() {
    const workList = this.props.workEdges.map(workEdge => workEdge.node.frontmatter);
    return workList;
  }

  render() {
    const workList = this.getWorkList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--8 mobile-fix">
          <div className="logos">
            {workList.map(work => (
              <Link key={work.title} to={`/work${work.slug}`}>
                <WorkLogo workInfo={work} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkGrid;
