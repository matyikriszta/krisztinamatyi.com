import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard'
import telia from './telia-ethics.png'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Header = styled.header``

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`

const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 200;
`

const Section = styled.section`
  padding: 1.45rem 0;
  max-width: 720px;
`

const IndexPage = () => (
  <Container>
    <Header>
      <Title>Krisztina Matyi</Title>
      <Subtitle>Web developer</Subtitle>
    </Header>
    <Section id="about">
      <p>
        Hi, I'm Kriszta. I am an experienced web developer with a background in
        product and graphic design. I love solving problems and building digital
        products that are usable, accessible, and that end-users find both
        useful and delightful. I love working with smart people who challenge me
        to learn and do my best work.
      </p>
      <p>
        I'm currently a Full-Stack Developer at{' '}
        <a href="https://lexoo.com/">Lexoo</a>. I am responsible for both
        front-end and back-end systems, though most of my time is focused on
        front-end architecture. Most recently, I was the technical lead for our
        app’s new design system and component library. I primarily work with
        Ruby on Rails, Vue.js, PostgreSQL, and Heroku. I also have experience
        building performant web apps with Javascript, Node.js, Express, and
        MongoDB.
      </p>
      <p>
        I'm a vocal advocate for diversity and inclusion in the tech industry.
        I'm a Director of codebar, a non-profit initiative that facilitates the
        growth of a diverse tech community by running regular programming
        workshops in 17 cities around the world. I also volunteer my time to
        organisations like{' '}
        <a href="https://www.canadalearningcode.ca/">Canada Learning Code</a>{' '}
        and <a href="http://railsgirls.london/">Rails Girls London</a>.
      </p>
      <p>
        In my spare time you will find me going to exhibitions, snowboarding,
        hiking, doing yoga or reading.
      </p>
    </Section>
    <Section id="recent-work">
      <h2>Recent work</h2>
      <p>
        <strong>
          Full-Stack Developer, <a href="https://lexoo.com/">Lexoo</a>
        </strong>{' '}
      </p>
      <p>
        <strong>
          Director, <a href="https://codebar.io/">codebar</a>
        </strong>{' '}
        - In my role as Director I’m responsible for the general management of
        the organisation including fundraising, overseeing our worldwide network
        of chapters, managing our online communities and maintaining the codebar
        technical infrastructure.
      </p>
      <p>
        <strong>The online bookseller</strong> - While working as a senior
        developer at software consultancy Happy Bear Software I contracted with
        an online bookseller specialising in rare books sold through Amazon.
        There I lead extensive refactoring efforts of their Ruby on Rails
        application. I improved their Amazon Marketplace Web Service (Amazon
        MWS) integration, allowing their customers to gain better insights into
        the status of their purchases, including providing more detailed
        shipping information. I also worked on their shipping label generating
        service to improve the productivity of their on-site shipping staff.
      </p>
      <p>
        <strong>The internal tool</strong> - While a front-end developer at
        Wolff Olins, I worked on an internal tool used to conduct yearly
        performance reviews. Built in Node.js and Express, backed by MongoDB and
        using Pug templating, I worked on every aspect of the project including
        the API, the database integration, and the front-end.
      </p>

      <ProjectCard
        image={telia}
        alt="Telia Ethics Website"
        title="Telia Ethics"
        link="http://dontdothisatwork.teliacompany.com/"
      >
        A static website for Telia Company's groundbreaking Code of Conduct,
        showcasing animated short videos illustrating the main concepts of the
        CoC. Built using Middleman, SCSS and vanilla Javascript, the process of
        building the site required close collaboration with the designers to
        bring their vision to life. The project went on to win a Wood Pencil at
        the D&amp;AD Awards 2017.
      </ProjectCard>

      <h3>Skills</h3>
      <p>
        <strong>Technology:</strong> HTML, CSS, Javascript (including ES2015),
        Ruby, Ruby on Rails, Vue.js, Node.js, Express, PostgreSQL, MongoDB, Git,
        Heroku, TDD, Webpack, CI systems including Travis and CircleCI.
        Familiarity with the AWS ecosystem.
      </p>
      <p>
        <strong>Design:</strong> Wireframing, rapid prototyping, Adobe Suite,
        Sketch
      </p>
      <p>
        <strong>Processes:</strong> Lean, agile processes; remote working
      </p>

      <h3>References</h3>
      <p>
        <strong>
          <a href="mailto:ali.najaf@gmail.com">Najaf Ali</a>
        </strong>: Founder, Happy Bear Software
      </p>
    </Section>

    <Section id="connect">
      <h2>Connect</h2>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:matyi.kriszta@gmail.com">matyi.kriszta@gmail.com</a>
      </p>
      <p>
        <strong>Twitter:</strong>{' '}
        <a href="https://twitter.com/KrisztaMatyi">@KrisztaMatyi</a>
      </p>
      <p>
        <strong>Github:</strong>{' '}
        <a href="https://github.com/matyikriszta">github.com/matyikriszta</a>
      </p>
    </Section>
  </Container>
)

export default IndexPage
