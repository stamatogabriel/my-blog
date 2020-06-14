import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Posts from '../components/Posts';
import SEO from '../components/SEO'
import config from '../../data/config'
import 'minireset.css';

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title={config.siteTitle} description={config.siteDescription} url={this.props.location} />
        <Posts data={data}/>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
