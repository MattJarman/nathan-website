import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import config from '../config'
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
      greetingControls.start({
        opacity: 1,
        y: 0,
        rotate: [0, 90, 0, 90, 0, 0],
        transition: { delay: 0.4 }
      })
    }
  }, [titleOnScreen, titleControls, greetingOnScreen, greetingControls])

  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex flex-col mt-32 space-y-2 md:mt-48">
        <div className="flex space-x-4">
          <motion.p
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleControls}
            className="text-2xl font-semibold tracking-wide text-emerald-500 md:text-5xl">
            Nathan Ellerton
          </motion.p>
          <motion.p
            ref={greetingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={greetingControls}
            className="text-2xl md:text-5xl">
            👋
          </motion.p>
        </div>
        <div className="text-sm leading-relaxed text-gray-600 max-w-xl text-left">
          {config.about}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
