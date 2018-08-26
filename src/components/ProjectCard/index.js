import React from 'react'
import styled from 'styled-components'

const ProjectCard = styled.div`
  margin-bottom: 1.45rem;
  @media (min-width: 600px) {
    flex-basis: calc(${props => props.width} - 1.45rem);
  }
`
const Image = styled.img`
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
`

export default ({ children, image, alt, title, link, width = '50%' }) => (
  <ProjectCard width={width}>
    <Image src={image} alt={alt} />
    <p>
      <strong>{title}</strong> - {children}
    </p>
    <a href={link}>Visit site</a>
  </ProjectCard>
)
