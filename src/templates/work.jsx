import React from "react";
import Helmet from "react-helmet";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";
import Overdrive from "react-overdrive";

import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./work.scss";

export default class WorkTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="post-page md-grid md-grid--no-spacing">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className={`md-grid md-cell--9 post-page-contents mobile-fix`}>
          <Header />
          <Card
            className="md-grid md-cell md-cell--12 post"
            style={{ borderRadius: "50px" }}
          >
            <div style={{ width: "25%", margin: "auto" }}>
              <Overdrive id={postNode.frontmatter.title} duration={250}>
                <img
                  src={postNode.frontmatter.logo}
                  alt="logo"
                  style={{ width: "100%", padding: "20px 0" }}
                />
              </Overdrive>
            </div>
            <CardText className="post-body">
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </CardText>
            <div className="post-meta" />
          </Card>
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tags
        logo
        logoWidth
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
      }
    }
  }
`;
