import { motion, useAnimation } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useRef, useEffect } from 'react'
import { useOnScreen } from '../hooks'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Icon from '../icons'

const AboutPage = () => {
  const {
    strapiAbout,
    allStrapiSkill: { edges: skillEdges },
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

  const { avatar, title, description } = strapiAbout
  const gatsbyAvatar = getImage(avatar.localFile)

  const introRef = useRef()
  const skillsRef = useRef()
  const experienceRef = useRef()

  const introOnScreen = useOnScreen(introRef)
  const skillsOnScreen = useOnScreen(skillsRef, 0.5)
  const experienceOnScreen = useOnScreen(experienceRef)

  // Intro controls
  const introLeftControls = useAnimation()
  const introRightControls = useAnimation()

  // Skills controls
  const iconControls = useAnimation()
  const barControls = useAnimation()
  const barBackgroundControls = useAnimation()

  // Experience controls
  const experienceControls = useAnimation()

  const delay = 0.1

  useEffect(() => {
    if (introOnScreen) {
      introLeftControls.start({ opacity: 1, y: 0 })
      introRightControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.25 },
      })
    }

    if (skillsOnScreen) {
      iconControls.start(i => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * delay },
      }))

      barControls.start(i => ({
        opacity: 1,
        width: '100%',
        transition: { delay: 0.2 + i * delay },
      }))

      barBackgroundControls.start(i => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * delay },
      }))
    }

    if (experienceOnScreen) {
      experienceControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.25 },
      })
    }
  }, [
    introOnScreen,
    skillsOnScreen,
    experienceOnScreen,
    introLeftControls,
    introRightControls,
    iconControls,
    barControls,
    barBackgroundControls,
    experienceControls,
  ])

  return (
    <Layout>
      <Seo title="About" />
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1200x500"
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <motion.div
                  ref={introRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={introLeftControls}
                  className="sm:w-1/3 text-center sm:pr-8 sm:py-8"
                >
                  <GatsbyImage
                    className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                    image={gatsbyAvatar}
                    alt="Me"
                    loading="lazy"
                  />
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      Nathan Ellerton
                    </h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">{title}</p>
                  </div>
                </motion.div>
                <motion.div
                  ref={introRef}
                  initial={{ opacity: 0, x: 20 }}
                  animate={introRightControls}
                  className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
                >
                  <p
                    className="wysiwyg leading-relaxed text-base md:text-lg mb-4"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col lg:w-4/6 lg:mx-auto">
            <div className="grid gap-y-2 grid-cols-1 md:grid-cols-none md:grid-rows-6 md:grid-flow-col xl:gap-y-4">
              {skillEdges.map(({ node }, index) => {
                const { id, name, level } = node
                return (
                  <div
                    key={id}
                    className="flex flex-row items-center justify-center"
                  >
                    <motion.div
                      custom={index}
                      ref={skillsRef}
                      initial={{ opacity: 0, x: 20 }}
                      animate={iconControls}
                      className="flex items-center justify-center mr-4 shadow-md p-2 rounded-md w-12 h-12 xl:w-16 xl:h-16"
                    >
                      <Icon name={name} />
                    </motion.div>
                    <motion.div
                      custom={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={barBackgroundControls}
                      className="w-full bg-gray-100 mr-4 shadow-lg border-2 border-green-400 rounded-sm"
                    >
                      <div style={{ width: `${level}%` }}>
                        <motion.div
                          custom={index}
                          ref={skillsRef}
                          initial={{ opacity: 0, width: 0 }}
                          animate={barControls}
                          className="h-6 xl:h-8 shadow-none flex flex-col font-semibold uppercase px-2 text-gray-800 justify-center bg-green-400 text-xs tracking-wider antialiased"
                        >
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
        <section
          id="experience"
          className="flex flex-col items-center min-h-view"
        >
          <div className="container flex-grow px-4 my-12 mx-auto content sm:px-16">
            <div className="text-gray-600 body-font">
              <motion.div
                ref={experienceRef}
                initial={{ opacity: 0, y: 20 }}
                animate={experienceControls}
                className="container flex flex-wrap px-5 mx-auto"
              >
                {groupedExperiences.map((groupedExperience, index) => {
                  return (
                    <div
                      key={groupedExperience.yearEnd}
                      className="flex relative pt-10 mx-auto w-full md:w-2/3"
                    >
                      <div className="flex absolute -left-12 justify-center w-16 transform -rotate-90 md:rotate-0 md:pr-8 md:w-12">
                        <span className="text-gray-400 tracking-wide font-semibold">
                          {groupedExperience.yearEnd}
                        </span>
                      </div>
                      <div className="flex absolute inset-0 justify-center items-center w-6 h-full">
                        <div className="w-1 h-full bg-green-500 pointer-events-none"></div>
                      </div>
                      <div className="inline-flex relative z-10 flex-shrink-0 items-center w-6 h-6 text-sm font-medium text-white bg-white rounded-full border-4 border-green-500 sm:mt-0 title-font"></div>
                      <div className="flex flex-col flex-grow items-start pl-6 sm:items-center sm:flex-row">
                        <div className="flex-grow py-4 mt-3 w-full border-t-2 border-gray-200">
                          {groupedExperience.experiences.map(
                            ({ title, name, description }, index) => {
                              return (
                                <motion.div
                                  key={`${groupedExperience.yearEnd}-${index}`}
                                  className="mb-8 last:mb-0"
                                >
                                  <p className="text-xl font-semibold text-black md:text-3xl">
                                    {title}
                                  </p>
                                  <p className="mb-2 text-sm italic text-gray-500">
                                    {name}
                                  </p>
                                  <p
                                    className="wysiwyg leading-relaxed mb-4 text-xs"
                                    dangerouslySetInnerHTML={{
                                      __html: description,
                                    }}
                                  >
                                    {}
                                  </p>
                                </motion.div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    strapiAbout {
      id
      title
      description
      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    allStrapiSkill(sort: { fields: [level], order: [DESC] }) {
      edges {
        node {
          id
          name
          level
        }
      }
    }
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
