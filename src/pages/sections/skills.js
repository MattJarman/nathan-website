import { motion, useAnimation } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useRef, useEffect } from 'react'
import { useOnScreen } from '../../hooks'
import Icon from '../../icons'

const SkillsSection = () => {
  const {
    allStrapiSkill: { edges: skillEdges }
  } = useStaticQuery(query)

  const skillsRef = useRef()

  const skillsOnScreen = useOnScreen(skillsRef)

  const iconControls = useAnimation()
  const barControls = useAnimation()
  const barBackgroundControls = useAnimation()
  const delay = 0.1

  useEffect(() => {
    if (skillsOnScreen) {
      iconControls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * delay }
      }))

      barControls.start((i) => ({
        opacity: 1,
        width: '100%',
        transition: { delay: 0.2 + i * delay }
      }))

      barBackgroundControls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * delay }
      }))
    }
  }, [skillsOnScreen, iconControls, barControls, barBackgroundControls])

  return (
    <section className="text-gray-600 body-font">
      <div
        ref={skillsRef}
        className="container px-5 py-24 mx-auto flex flex-col lg:w-4/6 lg:mx-auto">
        <div className="grid gap-y-2 grid-cols-1 md:grid-cols-none md:grid-rows-6 md:grid-flow-col xl:gap-y-4">
          {skillEdges.map(({ node }, index) => {
            const { id, name, level } = node
            return (
              <div
                key={id}
                className="flex flex-row items-center justify-center">
                <motion.div
                  custom={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={iconControls}
                  className="flex items-center justify-center mr-4 shadow-md p-2 rounded-md w-12 h-12 xl:w-16 xl:h-16">
                  <Icon name={name} />
                </motion.div>
                <motion.div
                  custom={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={barBackgroundControls}
                  className="w-full bg-gray-100 mr-4 shadow-lg border-2 border-green-400 rounded-sm">
                  <div style={{ width: `${level}%` }}>
                    <motion.div
                      custom={index}
                      ref={skillsRef}
                      initial={{ opacity: 0, width: 0 }}
                      animate={barControls}
                      className="h-6 xl:h-8 shadow-none flex flex-col font-semibold uppercase px-2 text-gray-800 justify-center bg-green-400 text-xs tracking-wider antialiased">
                      {name}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query {
    allStrapiSkill(sort: { fields: [level], order: [DESC] }) {
      edges {
        node {
          id
          name
          level
        }
      }
    }
  }
`

export default SkillsSection
