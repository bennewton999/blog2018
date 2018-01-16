/* eslint consistent-return: 0, array-callback-return: 0 */ 

import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import WorkGrid from "../components/WorkGrid/WorkGrid";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";


class Index extends React.Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    const postEdges = edges.filter(post => { if (post.node.id.indexOf('/content/posts/') > 0) return post; });
    const workEdges = edges.filter(post => { if (post.node.id.indexOf('/content/work/') > 0) return post; });
    return (
      <div className="index-container" style={{paddingBottom: '98px'}}>
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
        <SEO postEdges={postEdges} />
        <Hero />
        <h1 className="md-display-2 md-text-center">Recent Clients</h1>
        <WorkGrid  workEdges={workEdges} />
        <h1 className="md-display-2 md-text-center">Recent Posts</h1>
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            logo
            logoWidth
            tags
            date
          }
        }
      }
    }
  }
`;
