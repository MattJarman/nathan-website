import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
  }

  return (
    <>
      <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-50">
        <Header />
        <motion.main
          className="container relative flex-grow px-4 mx-auto mb-auto"
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}>
          {children}
        </motion.main>
        <Footer siteTitle="Nathan Ellerton" />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
