import React from 'react'
import { AnimatePresence } from 'framer-motion'
import './src/css/index.css'
import '@justinribeiro/lite-youtube'

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const TRANSITION_DELAY = 0.3 * 1000 * 2
  let timeout = () => window.scrollTo(0, 0)

  if (location.action !== 'PUSH') {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    timeout = () => window.scrollTo(...savedPosition)
  }

  window.setTimeout(timeout, TRANSITION_DELAY)
  return false
}
