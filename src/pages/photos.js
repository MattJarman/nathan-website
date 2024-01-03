import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import ExpandableImage from '../components/expandableImage'
import Layout from '../components/layout'
import Seo from '../components/seo'
import config from '../config'

const PhotosPage = () => {
  const photosRef = useRef()

  const photoControls = useAnimation()

  const delay = 0.05

  useEffect(() => {
    photoControls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * delay }
    }))
  }, [photoControls])

  return (
    <Layout>
      <Seo title="Photos" />
      <div className="grid gap-2 mt-8 mb-4 justify-items-center xs:grid-cols-2 sm:gap-4 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {config.photos.map(({ src }, index) => {
          return (
            <motion.div
              className="sm:h-72 lg:h-96"
              initial={{ opacity: 0, x: 20 }}
              animate={photoControls}
              ref={photosRef}
              key={index}
              custom={index}>
              <ExpandableImage
                className="rounded-sm shadow-xl"
                alt="image"
                imageSmall={src.small}
                imageLarge={src.large}
                loading="lazy"
              />
            </motion.div>
          )
        })}
      </div>
    </Layout>
  )
}

export default PhotosPage
