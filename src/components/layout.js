import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col transition-colors duration-300 min-h-screen bg-gray-50">
        <Header />
        <motion.main
          className="relative container mx-auto px-4 mb-auto flex-grow"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: 'spring',
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
          }}
        >
          {children}
        </motion.main>
        <Footer siteTitle="Nathan Ellerton" />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
