import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions/ToolbarActions";
import Footer from "../Footer/Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";
import config from "../../../data/SiteConfig";

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";
    return (
      <NavigationDrawer
        drawerHeader={
          <img
            src={config.userAvatar}
            className="user-img"
            alt={config.siteTitle}
          />
        }
        //drawerTitle={config.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={config} />}
      >
        <div className="main-container">
          {children}
        </div>
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
