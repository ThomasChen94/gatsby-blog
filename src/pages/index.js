import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
  const title = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
    	<Head title="Home"/>
      <div className={indexStyles.pageContainer}>
      	<div className={indexStyles.bgContainer}>
      		<div className={indexStyles.bgImage} />
      		<div className={indexStyles.title}>  {title.site.siteMetadata.title} </div>
      	</div>
      </div>

      <div>
        <h2>Chen Qian</h2>
        
      </div>
    </Layout>
  )
}

export default IndexPage;