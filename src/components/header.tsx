import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const LeftContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const H1 = styled.h1`
  margin: 0;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

interface Props {
  siteTitle?: string
}

const Header: FC<Props> = ({ siteTitle = '' }) => (
  <HeaderContainer>
    <LeftContainer>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </LeftContainer>
  </HeaderContainer>
)

export default Header
