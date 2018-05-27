import React, { Component } from "react";

import { Avatar, List, ListItem } from "react-md";

import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import { TweenMax } from "gsap";
import Overdrive from "react-overdrive";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Uses.scss";

import vscodeIcon from "../../images/vscode-icon.png";
import webstormIcon from "../../images/webstorm-icon.svg";
import prettierIcon from "../../images/prettier-icon.png";
import cobalt2Icon from "../../images/cobalt2-icon.png";
import carbonIcon from "../../images/carbon-icon.svg";
import rainbowBracketsIcon from "../../images/rainbowBrackets-icon.png";
import gitLensIcon from "../../images/gitlens-icon.png";
import codeSyncIcon from "../../images/code-settings-sync-icon.png";
import appleIcon from "../../images/apple-icon.png";
import colorHighlightIcon from "../../images/color-highlight-icon.png";
import debuggerForChromeIcon from "../../images/debugger-for-chrome-icon.png";
import editorConfigIcon from "../../images/editor-config-icon.png";
import eslintIcon from "../../images/eslint-icon.png";

class About extends Component {
  componentDidMount() {
    const el = this._inputRef;
    TweenMax.set(el, { css: { scale: 0, opacity: 0 } });
    TweenMax.to(el, 0.25, { css: { scale: 1, opacity: 1 } });
  }

  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8" style={{ borderRadius: "50px" }}>
          <div className="about-wrapper">
            <Overdrive id="me">
              <img
                src={config.userAvatar}
                className="about-img"
                alt={config.userName}
              />
            </Overdrive>
            <h1 className="my-name">What I Use</h1>

            <CardText style={{ width: "90%" }}>
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

                <a
                  href="https://github.com/shanalikhan/code-settings-sync"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={codeSyncIcon} />}
                    primaryText="Code Settings Sync"
                  />
                </a>
                <CardText>
                  {`Working across 2, sometimes 3 computers, this is a no brainer.  Plus when moving to a new computer, it speeds things up.`}
                </CardText>
                <a
                  href="https://github.com/prettier/prettier-vscode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={prettierIcon} />}
                    primaryText="Prettier"
                  />
                </a>
                <CardText>
                  {`If you're still spacing everything out nice and neat on your own, you're wasting time.  This is the best thing to come along in a while.  And make sure you set your editor.formatOnSave to true!`}
                </CardText>
                <a
                  href="https://github.com/wesbos/cobalt2-vscode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={cobalt2Icon} />}
                    primaryText="Cobalt 2 Theme"
                  />
                </a>
                <CardText>My current theme from Wes Bos.</CardText>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={carbonIcon} />}
                    primaryText="Carbon Now sh"
                  />
                </a>
                <CardText>
                  Opens the current editor content in carbon.now.sh and share
                  beautiful images of your source code.
                </CardText>
                <a
                  href="http://gitlens.amod.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={gitLensIcon} />}
                    primaryText="Git Lens"
                  />
                </a>
                <CardText>
                  I mainly use Git Lens for the git blame feature, but it has a
                  number of git enhancements for VSCode.
                </CardText>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={rainbowBracketsIcon} />}
                    primaryText="Rainbow Brackets"
                  />
                </a>
                <CardText>
                  Easy traversing of bracketed data in the editor.
                </CardText>
                <a
                  href="https://github.com/sergiirocks/vscode-ext-color-highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={colorHighlightIcon} />}
                    primaryText="Color Highlight"
                  />
                </a>
                <CardText>
                  Adds colored border around css/web colors in the editor.
                </CardText>
                <a
                  href="https://github.com/sergiirocks/vscode-ext-color-highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={debuggerForChromeIcon} />}
                    primaryText="Debugger for Chrome"
                  />
                </a>
                <CardText>
                  Debug your JavaScript code running in Google Chrome from VS
                  Code.
                </CardText>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={editorConfigIcon} />}
                    primaryText="EditorConfig"
                  />
                </a>
                <CardText>
                  This plugin attempts to override user/workspace settings with
                  settings found in .editorconfig files.
                </CardText>
                <a
                  href="https://github.com/Microsoft/vscode-eslint"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem
                    leftAvatar={<Avatar src={eslintIcon} />}
                    primaryText="Eslint"
                  />
                </a>
                <CardText>
                  {`The extension uses the ESLint library installed in the opened
                  workspace folder. If the folder doesn't provide one the
                  extension looks for a global install version.`}
                </CardText>
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
