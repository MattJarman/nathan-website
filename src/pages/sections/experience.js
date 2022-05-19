import { motion, useAnimation } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useRef, useEffect } from 'react'
import { useOnScreen } from '../../hooks'

const ExperienceSection = () => {
  const {
    allStrapiExperience: { edges: experienceEdges }
  } = useStaticQuery(query)

  let groupedExperiences = []
  for (const { node } of experienceEdges) {
    const foundYearIndex = groupedExperiences.findIndex(
      (experience) => experience.yearEnd === node.yearEnd
    )

    const experience = {
      id: node.id,
      title: node.title,
      name: node.name,
      description: node.description
    }

    if (foundYearIndex > -1) {
      groupedExperiences[foundYearIndex].experiences.push(experience)
      continue
    }

    groupedExperiences.push({
      yearEnd: node.yearEnd,
      experiences: [experience]
    })
  }

  groupedExperiences = groupedExperiences.sort((a, b) => {
    const result = b.yearEnd - a.yearEnd
    return isNaN(result) ? Number.MAX_SAFE_INTEGER : result
  })

  const experienceRef = useRef()

  const experienceOnScreen = useOnScreen(experienceRef, 0.1)

  const experienceControls = useAnimation()

  useEffect(() => {
    if (experienceOnScreen) {
      experienceControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.25 }
      })
    }
  }, [experienceOnScreen, experienceControls])

  return (
    <section id="experience" className="flex flex-col items-center min-h-view">
      <div className="container flex-grow px-4 my-12 mx-auto content sm:px-16">
        <div className="text-gray-600 body-font">
          <motion.div
            ref={experienceRef}
            initial={{ opacity: 0, y: 20 }}
            animate={experienceControls}
            className="container flex flex-wrap px-5 mx-auto">
            {groupedExperiences.map((groupedExperience, index) => {
              return (
                <div
                  key={groupedExperience.yearEnd}
                  className="flex relative pt-10 mx-auto w-full md:w-2/3">
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
                              className="mb-8 last:mb-0">
                              <p className="text-xl font-semibold text-black md:text-3xl">
                                {title}
                              </p>
                              <p className="mb-2 text-base italic text-gray-500">
                                {name}
                              </p>
                              <div
                                className="wysiwyg leading-relaxed mb-4 text-xs"
                                dangerouslySetInnerHTML={{
                                  __html: description
                                }}>
                                {}
                              </div>
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

export default ExperienceSection
