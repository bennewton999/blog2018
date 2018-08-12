import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Button from 'react-md/lib/Buttons';
import Link from 'gatsby-link';
import UserLinks from '../UserLinks/UserLinks';
import config from '../../../data/SiteConfig';
import './Footer.scss';

const Footer = (props) => {

  const url = config.siteRss;
  const { userLinks } = props;
  const copyright = config.copyright;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      {userLinks ? <UserLinks config={config} labeled /> : null}
      <div className="notice-container">
        <div className="copyright">
          <h4>
            {copyright}
          </h4>
        </div>
        <div className="rss">
          <Link to={url}>
            <Button icon secondary iconClassName="fa fa-rss" />
          </Link>
        </div>
      </div>
      <MessengerCustomerChat
        pageId="1285370034940298"
        appId="206872540176782"
      />
    </footer>
  );
}

export default Footer;
