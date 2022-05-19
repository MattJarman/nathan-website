import { motion, useAnimation } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useRef, useEffect } from 'react'
import { useOnScreen } from '../../hooks'

const IntroductionSection = () => {
  const { strapiAbout } = useStaticQuery(query)

  const { avatar, title, description } = strapiAbout
  const gatsbyAvatar = getImage(avatar.localFile)

  const introRef = useRef()

  const introOnScreen = useOnScreen(introRef)

  const introLeftControls = useAnimation()
  const introRightControls = useAnimation()

  useEffect(() => {
    if (introOnScreen) {
      introLeftControls.start({ opacity: 1, y: 0 })
      introRightControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.25 }
      })
    }
  }, [introOnScreen, introLeftControls, introRightControls])

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col px-5 py-16 mx-auto md:py-32">
        <div className="mx-auto lg:w-4/6">
          <div className="flex flex-col mt-10 sm:flex-row">
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, y: 20 }}
              animate={introLeftControls}
              className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <GatsbyImage
                className="inline-flex items-center justify-center w-24 h-24 text-gray-400 bg-gray-200 rounded-full"
                image={gatsbyAvatar}
                alt="Me"
                loading="lazy"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mt-4 text-lg font-medium text-gray-900 title-font">
                  Nathan Ellerton
                </h2>
                <div className="w-12 h-1 mt-2 mb-4 rounded bg-emerald-500"></div>
                <p className="text-base">{title}</p>
              </div>
            </motion.div>
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, x: 20 }}
              animate={introRightControls}
              className="pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
              <div
                className="mb-4 text-base leading-relaxed wysiwyg md:text-lg"
                dangerouslySetInnerHTML={{ __html: description }}></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
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
  }
`

export default IntroductionSection
