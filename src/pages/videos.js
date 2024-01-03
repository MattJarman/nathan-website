import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Layout from '../components/layout'
import LazyIFrame from '../components/lazyIFrame'
import Seo from '../components/seo'
import config from '../config'
import Icon from '../icons'

const VideosPage = () => {
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
        {config.videos.map((video, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={videoControls}
              ref={videosRef}
              custom={index}
              key={index}
              className="self-stretch w-full p-2 sm:w-1/2 xl:w-1/3">
              <div className="flex flex-col h-full p-4 space-y-4 bg-white rounded-md shadow-lg">
                <div className="w-full">
                  <div className="aspect-video">
                    <LazyIFrame
                      className="w-full rounded-md shadow-lg"
                      url={video.embedUrl}
                      title={video.title}
                    />
                  </div>
                </div>
                <p className="text-2xl font-semibold tracking-wide truncate text-gray-800">
                  {video.title}
                </p>
                <p className="flex-grow text-xs leading-tight text-gray-700 overflow-ellipsis">
                  {video.description}
                </p>
                <div className="flex justify-end">
                  <div className="flex items-center flex-grow space-x-2">
                    {video.tags.map((tag, index) => {
                      return (
                        <div
                          key={`tag-${tag}-${index}`}
                          className="px-3 py-1 text-xs tracking-wide text-gray-700 bg-gray-200 rounded-full">
                          {tag}
                        </div>
                      )
                    })}
                  </div>
                  <a href={video.externalUrl} target="_blank" rel="noreferrer">
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

export default VideosPage
