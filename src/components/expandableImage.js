import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

export const ExpandableImage = props => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const imagePreview = getImage(props.imageSmall)

  return (
    <>
      {expanded && (
        <div
          onClick={toggleExpanded}
          className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-hidden modal opacity-1 transition"
        >
          <div className="absolute z-20 w-full h-full bg-black bg-opacity-75 modal-overlay">
            <div className="z-50 w-full h-full mx-auto rounded shadow-lg modal-container">
              <div
                className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
                onClick={toggleExpanded}
              >
                <svg
                  className="text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
              <div className="flex items-center justify-center w-full h-full modal-content px-2">
                <GatsbyImage
                  className="rounded-md expandable-image max-w-9/10 md:max-h-9/10"
                  alt={props.alt}
                  image={props.imageLarge ? props.imageLarge : imagePreview}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="h-full" onClick={toggleExpanded}>
        <GatsbyImage
          className={`object-cover h-full cursor-pointer ${props.className}`}
          alt={props.alt}
          image={imagePreview}
          loading={props.loading || 'eager'}
        />
      </div>
    </>
  )
}

ExpandableImage.propTypes = {
  ref: PropTypes.node,
  imageSmall: PropTypes.any.isRequired,
  imageLarge: PropTypes.any,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
}

export default ExpandableImage
