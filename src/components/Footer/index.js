import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
`

const Footer = () => (
  <footer>
    <Wrapper>
      <p>
        <small>Copyright © Krisztina Matyi 2020</small>
      </p>
    </Wrapper>
  </footer>
)

export default Footer
