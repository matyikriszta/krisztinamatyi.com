import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components'
import logo from './logo.svg'

const Container = styled.header`
  margin-bottom: 1.45rem;
  border-top: 10px solid #1abc9c;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`

const Image = styled.img`
  width: 100px;
`
const Logo = styled(Link)`
  display: block;
`

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`

const ListItem = styled.li`
  display: inline;
  margin-left: 0.8rem;
  margin-bottom: 0;
`

const StyledLink = styled(AnchorLink)`
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <Logo to="/" title={siteTitle}>
        <Image src={logo} alt="Logo" />
      </Logo>
      <nav>
        <List>
          <ListItem>
            <StyledLink href="#about">About</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="#recent-work">Recent work</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="#connect">Connect</StyledLink>
          </ListItem>
        </List>
      </nav>
    </Wrapper>
  </Container>
)

export default Header
