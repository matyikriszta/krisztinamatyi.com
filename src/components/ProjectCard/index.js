import React from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const ProjectContent = styled.div`
  margin-bottom: 1.45rem;
  @media (min-width: 600px) {
    flex-basis: calc(${props => props.width});
  }
`
const ProjectImage = styled.div`
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  @media (min-width: 600px) {
    flex-basis: calc(${props => props.width} - 1.45rem);
  }
`

const Image = styled.img`
  width: 100%;
`

export default ({ children, image, alt, title, link, width = '50%' }) => (
  <FlexContainer>
    <ProjectContent width={width}>
      <p>
        <strong>
          <a href={link}>{title}</a>
        </strong>{' '}
        - {children}
      </p>
    </ProjectContent>
    <ProjectImage width={width}>
      <Image src={image} alt={alt} />
    </ProjectImage>
  </FlexContainer>
)
