import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
    	<Head title="about"></Head>
      <p>Such wow. Very React.</p>
      <p>See <a href = '/contact'>my contact </a></p>
    </Layout>
  )
}

export default AboutPage;