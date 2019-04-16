import React from 'react';
import Card from 'react-md/lib/Cards';
import Button from 'react-md/lib/Buttons';

const DiscussOnTwitter = props => {
  const { config, post } = props;
  const { siteUrl } = config;
  const { id } = post;

  return (
    <Card
      className="md-grid md-cell md-cell--12 post"
      style={{ borderRadius: '50px' }}
    >
      <Button
        icon={false}
        flat
        secondary
        iconClassName={'fab fa-twitter'}
        href={`https://mobile.twitter.com/search?q=${siteUrl}${id}`}
      >
        Discuss this on Post on Twitter
      </Button>
    </Card>
  );
};

export default DiscussOnTwitter;
