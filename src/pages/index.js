import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'
import selfi from '../images/selfi.jpg';
import googleAds from '../images/google-ads.png'


const BackgroundImageSection = () => {
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
    <div className={indexStyles.bgContainer}>
      <div className={indexStyles.bgImage} />
      <div className={indexStyles.title}>  {title.site.siteMetadata.title} </div>
    </div>
  )
}

const IntroSection = () => {
  return (
    <div className={indexStyles.introContainer}>
      <h2>Chen Qian</h2>
      <img className={indexStyles.selfi} src={selfi} alt=""/>
      <h3>Google Software Engineer & Machine Learning Player</h3>
      {/* TODO: PUT LINK TO SOCIAL WEBSITE HERE*/}
      <div className={indexStyles.socialLink}></div>
    </div>
  )
}

const WorkExperienceSection = () => {
  return (
    <div className={indexStyles.workExperienceContainer}>
      <h2>My Working Experience</h2>
      <div className={indexStyles.workItem}>
        <div className={indexStyles.image}> 
          <img src={googleAds} alt=""/>
        </div>
        <div className={indexStyles.text}> 
          <p className={indexStyles.company}> 
            <a href="https://ads.google.com/local-services-ads/">Google Ads - Local Services </a>
          </p>
          <p className={indexStyles.role}>
            Full Stack Software Engineer, since Fall 2018
          </p>
          <p className={indexStyles.details}>
            Local Services by Google (GLS) is an effort in the local ad space to connect users looking for a home service 
            (such as plumbing, HVAC, or car repair) with pre-screened service providers. <br />
            My role is developing robust and high-performance backend & infrastructure using modern technique, including Spanner, 
            Kubernetis, gRPC (all in internal version).
          </p>
        </div>          
      </div>
      
    </div>
  )
}


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <BackgroundImageSection></BackgroundImageSection>
      <IntroSection></IntroSection>
      <WorkExperienceSection></WorkExperienceSection>
    </Layout>
  )
}

export default IndexPage;