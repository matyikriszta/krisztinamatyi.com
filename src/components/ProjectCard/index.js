import React from 'react'
import styled from 'styled-components'

const ProjectCard = styled.div`
  flex-basis: ${props => props.width};
`

export default ({ children, image, alt, title, width = '50%' }) => (
  <ProjectCard width={width}>
    <img src={image} alt={alt} />
    <p>
      <strong>{title}</strong>
    </p>
    {children}
  </ProjectCard>
)
