import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useOnScreen } from '../hooks'

const getYoutubeId = url => {
  const parsed = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)

  const [, , id] = parsed

  if (id) {
    const [parsedId] = id.split(/[^0-9a-z_-]/i)
    return parsedId
  }

  return url
}

const LazyIFrame = ({ url, title, className }) => {
  const containerRef = useRef()

  const containerOnScreen = useOnScreen(containerRef)

  return (
    <div className={className} ref={containerRef}>
      {containerOnScreen && (
        <lite-youtube
          videoid={getYoutubeId(url)}
          title={title}
          videotitle={title}
        ></lite-youtube>
      )}
    </div>
  )
}

LazyIFrame.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default LazyIFrame
