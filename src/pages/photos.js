import { graphql, useStaticQuery } from 'gatsby'
import React, { useRef, useEffect } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ExpandableImage from '../components/expandableImage'
import { motion, useAnimation } from 'framer-motion'

const PhotosPage = () => {
  const {
    allStrapiPhoto: { edges: photoEdges },
  } = useStaticQuery(query)

  const photosRef = useRef()

  const photoControls = useAnimation()

  const delay = 0.1

  useEffect(() => {
    photoControls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * delay },
    }))
  }, [photoControls])

  return (
    <Layout>
      <Seo title="Photos" />
      <div className="mt-8 grid grid-cols-2 gap-2 mb-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {photoEdges.map(({ node }, index) => {
          return (
            <motion.div
              className="h-56 h-72 md:h-96"
              initial={{ opacity: 0, x: 20 }}
              animate={photoControls}
              ref={photosRef}
              key={index}
              custom={index}
            >
              <ExpandableImage
                className="shadow-xl rounded-sm"
                alt="image"
                image={node.image.localFile}
              />
            </motion.div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiPhoto(
      sort: { fields: [order, published_at], order: [ASC, DESC] }
    ) {
      edges {
        node {
          id
          published_at
          order
          Name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default PhotosPage
