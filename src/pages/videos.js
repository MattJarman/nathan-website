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
      <div className="flex flex-wrap items-stretch justify-center -mx-2">
        {videoEdges.map(({ node }, index) => {
          const { id, embedURL, externalURL, title, description, tags } = node
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={videoControls}
              ref={videosRef}
              custom={index}
              key={id}
              className="self-stretch w-full p-2 sm:w-1/2 xl:w-1/3">
              <div className="flex flex-col h-full p-4 space-y-4 bg-white rounded-md shadow-lg">
                <div className="w-full">
                  <div className="aspect-video">
                    <LazyIFrame
                      className="w-full rounded-md shadow-lg"
                      url={embedURL}
                      title={title}
                    />
                  </div>
                </div>
                <p className="pl-2 text-2xl font-semibold tracking-wide truncate border-l-4 border-emerald-500 text-emerald-500">
                  {title}
                </p>
                <p className="flex-grow text-xs leading-tight text-gray-700 overflow-ellipsis">
                  {description}
                </p>
                <div className="flex justify-end">
                  <div className="flex items-center flex-grow space-x-2">
                    {tags.map((tag, index) => {
                      return (
                        <div
                          key={`${id}-tag-${index}`}
                          className="px-3 py-1 text-xs tracking-wide text-gray-700 bg-gray-200 rounded-full">
                          {tag}
                        </div>
                      )
                    })}
                  </div>
                  <a href={externalURL} target="_blank" rel="noreferrer">
                    <Icon
                      className="w-5 text-xl text-gray-800 cursor-pointer"
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
