import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard'
import telia from './telia-ethics.png'
import wo from './wolff-olins.png'

const Container = styled.div``

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IndexPage = () => (
  <Container>
    <h1>Krisztina Matyi</h1>
    <h2>Web developer</h2>
    <p>
      Hi, I'm Kriszta. I am an experienced web developer with a background in
      product and graphic design. I love solving problems and am passionate
      about usability, accessibility, and creating digital products that
      end-users find both useful and delightful. I love working with smart
      people who challenge me to learn and do my best work.
    </p>
    <p>
      I'm currently a Senior Developer at Happy Bear Software. As part of a team
      of consulting developers I am responsible for new feature development and
      ongoing codebase maintenance for a variety of clients, primarily working
      with Ruby on Rails, PostgreSQL, and Heroku. I also have experience
      building web apps in Javascript, node.js, and MongoDB, as well as
      performant websites in HTML, CSS, and Javascript, backed by a variety of
      content management systems.
    </p>
    <p>
      I'm a vocal advocate for diversity and inclusion in the tech industry. I'm
      a Director of codebar, a non-profit initiative that facilitates the growth
      of a diverse tech community by running regular programming workshops in 17
      cities around the world. I also volunteer my time to organisations like{' '}
      <a href="">Canada Learning Code</a> and <a href="">Rails Girls London</a>.
    </p>
    <p>
      In my spare time you will find me going to exhibitions, snowboarding,
      hiking, doing yoga or reading.
    </p>
    <h3>Recent work</h3>
    <p>
      <strong>
        Director, <a href="https://codebar.io/">codebar</a>
      </strong>{' '}
      - In my role as Director I’m responsible for the general management of the
      organisation including fundraising, overseeing our worldwide network of
      chapters, managing our online communities and maintaining the codebar
      technical infrastructure including a Ruby on Rails app.
    </p>
    <p>
      <strong>The online bookseller</strong> - Most recently I worked with an
      online bookseller where I lead extensive refactoring efforts of their
      Rails app. I improved their Amazon integrations which allowed users to
      gain better insights into the status of their purchases. I also
      implemented several changes to their shipping label generating process to
      aid the work of their on-site shipping staff.
    </p>
    <p>
      <strong>Internal tool, Wolff Olins</strong> - While at Wolff Olins I
      extensively worked on an internal tool used to conduct yearly employee
      reviews. Built in node.js + Express, backed by MongoDB and using Pug
      templating, I worked on every aspect of the project including the API, the
      database integration, and the front-end.
    </p>

    <FlexContainer>
      <ProjectCard
        image={telia}
        alt="Telia Ethics Website"
        title="Telia Ethics"
      />
      <ProjectCard
        image={wo}
        alt="Wolff Olins website"
        title="Wolff Olins website"
      />
    </FlexContainer>

    <h3>Skills</h3>
    <p>
      <strong>Technology</strong> - Javascript, Ruby, HTML, CSS, Ruby on Rails,
      Node.js, Express, PostgreSQL, MongoDB, Git, Heroku, AWS, TDD, CI systems
      including Travis and Codeship, Gulp, Webpack
    </p>
    <p>
      <strong>Design</strong> - Wireframing, rapid prototyping, Adobe Suite,
      Sketch
    </p>
    <p>
      <strong>Processes</strong> - Lean, agile processes; remote working
    </p>

    <h3>References</h3>
    <p>
      <strong>Najaf Ali</strong>, Founder, Happy Bear Software,
      ali.najaf@gmail.com
    </p>

    <h3>Contact</h3>
    <p>
      If you are interested in hiring me or want to chat about an idea you have
      email <a href="mailto:matyi.kriszta@gmail.com">matyi.kriszta@gmail.com</a>.
    </p>
  </Container>
)

export default IndexPage
