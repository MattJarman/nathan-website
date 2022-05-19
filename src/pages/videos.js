import { motion, useAnimation } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import Icon from '../icons'
import Layout from '../components/layout'
import Seo from '../components/seo'
import LazyIFrame from '../components/lazyIFrame'

const VideosPage = () => {
  const {
    allStrapiVideo: { edges: videoEdges }
  } = useStaticQuery(query)

  const videosRef = useRef()

  const videoControls = useAnimation()

  const delay = 0.1

  useEffect(() => {
    videoControls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * delay }
    }))
  }, [videoControls])

  return (
    <Layout>
      <Seo title="Videos" />
      <div className="flex flex-wrap justify-center -mx-2 items-stretch">
        {videoEdges.map(({ node }, index) => {
          const { id, embedURL, externalURL, title, description, tags } = node
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={videoControls}
              ref={videosRef}
              custom={index}
              key={id}
              className="p-2 w-full sm:w-1/2 xl:w-1/3 self-stretch">
              <div className="flex flex-col shadow-lg p-4 space-y-4 rounded-md bg-white h-full">
                <div className="w-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <LazyIFrame
                      className="w-full rounded-md shadow-lg"
                      url={embedURL}
                      title={title}
                    />
                  </div>
                </div>
                <p className="border-l-4 border-green-500 pl-2 text-green-500 tracking-wide font-semibold text-2xl truncate">
                  {title}
                </p>
                <p className="text-xs text-gray-700 leading-tight overflow-ellipsis flex-grow">
                  {description}
                </p>
                <div className="flex justify-end">
                  <div className="flex items-center flex-grow space-x-2">
                    {tags.map((tag, index) => {
                      return (
                        <div
                          key={`${id}-tag-${index}`}
                          className="text-xs bg-gray-200 text-gray-700 rounded-full px-3 py-1 tracking-wide">
                          {tag}
                        </div>
                      )
                    })}
                  </div>
                  <a href={externalURL} target="_blank" rel="noreferrer">
                    <Icon
                      className="text-gray-800 text-xl w-5 cursor-pointer"
                      name="external"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiVideo(sort: { fields: [order, published_at], order: [ASC, ASC] }) {
      edges {
        node {
          id
          title
          embedURL
          externalURL
          tags
          description
          published_at
          order
        }
      }
    }
  }
`

export default VideosPage
