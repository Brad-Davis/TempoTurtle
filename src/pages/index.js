import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import {Image, Header} from 'semantic-ui-react'
import SEO from '../components/SEO'
import logo from '../images/ill-short-dark.svg'
import Layout from '../components/Layout'

const StoreIndex = ({location}) => {


  const siteTitle = get(data, 'site.siteMetadata.title')
  
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          <Image src={logo} alt="logo" />
        </Header.Content>
      </Header>
    </Layout>
  )
}

export default StoreIndex
