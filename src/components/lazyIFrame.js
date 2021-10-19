import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useOnScreen } from '../hooks'

const LazyIFrame = ({ url, title, className }) => {
  const containerRef = useRef()

  const containerOnScreen = useOnScreen(containerRef)

  useEffect(() => {})

  return (
    <div ref={containerRef}>
      {containerOnScreen && (
        <iframe
          className={`h-full w-full ${className}`}
          title={title}
          src={url}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
