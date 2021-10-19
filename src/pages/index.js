import React, { useEffect, useRef } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { motion, useAnimation } from 'framer-motion'
import { useOnScreen } from '../hooks'

const IndexPage = () => {
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
      greetingControls.start({ opacity: 1, y: 0, rotate: [0, 90, 0, 90, 0, 0] })
    }
  }, [titleOnScreen, titleControls, greetingOnScreen, greetingControls])

  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex space-x-4 h-screen items-center justify-center">
        <motion.p
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleControls}
          className="text-6xl font-bold"
        >
          Welcome
        </motion.p>
        <motion.p
          ref={greetingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={greetingControls}
          className="text-6xl"
        >
          👋
        </motion.p>
      </div>
    </Layout>
  )
}

export default IndexPage
