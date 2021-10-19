import React, { useEffect, useRef } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { motion, useAnimation } from 'framer-motion'
import { useOnScreen } from '../hooks'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  const {
    strapiAbout: { title },
  } = useStaticQuery(query)

  const titleControls = useAnimation()
  const greetingControls = useAnimation()

  const titleRef = useRef()
  const greetingRef = useRef()

  const titleOnScreen = useOnScreen(titleRef)
  const greetingOnScreen = useOnScreen(greetingRef)

  useEffect(() => {
    if (titleOnScreen) {
      titleControls.start({ opacity: 1, y: 0 })
    }

    if (greetingOnScreen) {
      greetingControls.start({
        opacity: 1,
        y: 0,
        rotate: [0, 90, 0, 90, 0, 0],
        transition: { delay: 0.4 },
      })
    }
  }, [titleOnScreen, titleControls, greetingOnScreen, greetingControls])

  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex flex-col space-y-2 mt-32 md:mt-64">
        <div className="flex space-x-4">
          <motion.p
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleControls}
            className="text-4xl md:text-6xl font-semibold text-green-500 tracking-wide"
          >
            Nathan Ellerton
          </motion.p>
          <motion.p
            ref={greetingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={greetingControls}
            className="text-4xl md:text-6xl"
          >
            👋
          </motion.p>
        </div>
        <div className="leading-relaxed text-lg md:text-3xl text-gray-600">
          {title}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    strapiAbout {
      id
      title
    }
  }
`

export default IndexPage
