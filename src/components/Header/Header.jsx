import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import './Header.css'

export default () => (
  <StaticQuery query={graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <header className="header">
      <Link to="/" className="header-title">{data.site.siteMetadata.title}</Link>
    </header>
  )} />
)