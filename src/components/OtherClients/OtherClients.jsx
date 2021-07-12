import React, { Component } from 'react';
import WorkLogo from '../WorkLogo/WorkLogo';
import './OtherClients.scss';

class OtherClients extends Component {
  getWorkList() {
    const workList = this.props.workEdges.map(
      workEdge => workEdge.node.frontmatter
    );
    return workList;
  }

  render() {
    const workList = this.getWorkList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--8 mobile-fix">
          <div className="logos">
            {workList.map(work => (
              <div key={work.title} className="logo-container">
                <WorkLogo workInfo={work} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default OtherClients;
