import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ siteTitle }) => {
  return (
    <footer className="flex items-center border-t-2 border-gray-100 dark:border-prussian-blue mt-8 py-8">
      <div className="container mx-auto px-4 lg:px-32 mb-auto">
        <p className="text-xs">
          Copyright © {new Date().getFullYear()}, {siteTitle}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
