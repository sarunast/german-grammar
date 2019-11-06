import React, { FC } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageContainer>
      <Image />
    </ImageContainer>
  </Layout>
)

export default IndexPage
