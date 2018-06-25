import React, { Component } from 'react';

import { Avatar, List, ListItem } from 'react-md';

import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Link from 'gatsby-link';
import { TweenMax } from 'gsap';
import Overdrive from 'react-overdrive';
import UserLinks from '../UserLinks/UserLinks';
import config from '../../../data/SiteConfig';
import './Uses.scss';

import vscodeIcon from '../../images/vscode-icon.png';
import webstormIcon from '../../images/webstorm-icon.svg';
import appleIcon from '../../images/apple-icon.png';

import vsCodeExtensions from '../../../content/uses/vscode-extensions';

class About extends Component {
  componentDidMount() {
    const el = this._inputRef;
    TweenMax.set(el, { css: { scale: 0, opacity: 0 } });
    TweenMax.to(el, 0.25, { css: { scale: 1, opacity: 1 } });
  }

  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8" style={{ borderRadius: '50px' }}>
          <div className="about-wrapper">
            <Link to="/">
              <Overdrive id="me">
                <img
                  src={config.userAvatar}
                  className="about-img"
                  alt={config.userName}
                />
              </Overdrive>
            </Link>
            <h1 className="my-name">What I Use</h1>

            <CardText style={{ width: '90%' }}>
              <CardTitle title="Editors" />
              <List>
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={vscodeIcon} />}
                    primaryText="VSCode"
                  />
                </a>
                <CardText>
                  {`I tried VScode when it first started getting popular and
                      it just didn't cut it. In 2017, I went back to it and I
                      haven't looked back. It's my favorite for any project
                      that's not too big.`}
                </CardText>

                <a
                  href="https://www.jetbrains.com/webstorm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={webstormIcon} />}
                    primaryText="Webstorm"
                  />
                </a>
                <CardText>
                  {`Still my go to for any large projects.  I mainly use this for SR_ work.`}
                </CardText>
              </List>
              <List>
                <CardTitle title="Plugins" />
                {vsCodeExtensions.map((ext) => (
                  <div key={ext.title}>
                    <a
                      href={ext.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItem
                        leftAvatar={<Avatar src={`/vs-ext/${ext.icon}`} />}
                        primaryText={ext.title}
                      />
                    </a>
                    <CardText>
                      {ext.description}
                    </CardText>
                  </div>
                ))}
              </List>

              <CardTitle title="Hardware" />
              <List>
                <a
                  href="https://code.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={appleIcon} suffix="white" />}
                    primaryText="MacBook Pro"
                  />
                </a>
                <CardText>
                  {`My personal computer is a MacBook Pro (13-inch, 2016, Touch Bar).  I'm pretty happy with it.  I use my work Laptop for any heavy lifting.`}
                </CardText>

                <a
                  href="https://code.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={appleIcon} suffix="white" />}
                    primaryText="MacBook Pro"
                  />
                </a>
                <CardText>
                  {`My personal computer is a MacBook Pro (15-inch, 2016). Fully loaded work horse.`}
                </CardText>
              </List>
            </CardText>
            <UserLinks contactMe config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
