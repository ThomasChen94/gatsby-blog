import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: plublishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            plublishedDate (formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="blog"></Head>
      <h1>Blog</h1>
      <ol className={blogStyles.blogList}>
        {data.allContentfulBlogPost.edges.map( (edge) => {
          return (
            <li className={blogStyles.blogListItem}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.plublishedDate}</p>
              </Link>
            </li>
          )
        } )}
      </ol>
    </Layout>
  )
};

export default BlogPage;



