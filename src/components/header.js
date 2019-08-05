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
    </div>
  )
};


export default Header;
