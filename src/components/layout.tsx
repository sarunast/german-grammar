/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GlobalCss from './globalCss'

import Header from './header'

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalCss />
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ContentContainer>
    </>
  )
}

export default Layout
