import { motion, useAnimation } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useRef, useEffect } from 'react'
import IntroductionSection from './sections/introduction'
import { useOnScreen } from '../hooks'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Icon from '../icons'
import SkillsSection from './sections/skills'
import ExperienceSection from './sections/experience'

const AboutPage = () => {
  const {
    allStrapiExperience: { edges: experienceEdges },
  } = useStaticQuery(query)

  const groupedExperiences = []
  for (const { node } of experienceEdges) {
    const foundYearIndex = groupedExperiences.findIndex(
      experience => experience.yearEnd === node.yearEnd
    )

    const experience = {
      id: node.id,
      title: node.title,
      name: node.name,
      description: node.description,
    }

    if (foundYearIndex > -1) {
      groupedExperiences[foundYearIndex].experiences.push(experience)
      continue
    }

    groupedExperiences.push({
      yearEnd: node.yearEnd,
      experiences: [experience],
    })
  }

  const experienceRef = useRef()

  const experienceOnScreen = useOnScreen(experienceRef, 0.1)

  // Experience controls
  const experienceControls = useAnimation()

  useEffect(() => {
    if (experienceOnScreen) {
      experienceControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.25 },
      })
    }
  }, [experienceOnScreen, experienceControls])

  return (
    <Layout>
      <Seo title="About" />
      <div>
        <IntroductionSection />
        <SkillsSection />
        <ExperienceSection />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiExperience(sort: { fields: [yearEnd], order: [ASC] }) {
      edges {
        node {
          id
          title
          name
          description
          yearEnd
        }
      }
    }
  }
`

export default AboutPage
