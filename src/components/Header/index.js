import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from './logo.svg'

const Container = styled.div`
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
  margin-bottom: 0;
`
const StyledLink = styled(Link)`
  display: block;
  border-bottom: 0;
`

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`

const ListItem = styled.li`
  display: inline;
  margin-left: 1rem;
  margin-bottom: 0;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <StyledLink to="/" title="Krisztina Matyi">
        <Image src={logo} alt="Logo" />
      </StyledLink>
      <nav>
        <List>
          <ListItem>
            <Link to="">About</Link>
          </ListItem>
          <ListItem>
            <Link to="">Recent Work</Link>
          </ListItem>
          <ListItem>
            <Link to="">Contact</Link>
          </ListItem>
        </List>
      </nav>
    </Wrapper>
  </Container>
)

export default Header
