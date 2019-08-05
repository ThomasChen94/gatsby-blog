import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import ReactNavbar from './navBar.js'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <ReactNavbar />
      <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </header>
    </div>
  )
};


export default Header;
