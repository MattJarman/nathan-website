import { Transition } from '@headlessui/react'
import React, { useState, Fragment, useRef } from 'react'
import Icon from '../icons'
import config from '../config'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useOnClickOutside } from '../hooks'
import { motion } from 'framer-motion'

const Header = () => {
  const {
    allStrapiSocial: { edges: socialEdges }
  } = useStaticQuery(query)

  const [hidden, setHidden] = useState(true)
  const mobileMenuRef = useRef()

  const { navLinks } = config
  const { menu } = navLinks

  const toggleHidden = () => {
    setHidden(!hidden)
  }

  const hide = () => {
    setHidden(true)
  }

  useOnClickOutside(mobileMenuRef, () => {
    !hidden && hide()
  })

  return (
    <header className="sticky top-0 z-50">
      <nav className="transition-colors duration-300 bg-white">
        <div>
          <div className="w-full mx-auto">
            <div className="flex justify-between items-center border-b-2 border-gray-100 transition-colors duration-300 py-4 md:justify-start md:space-x-4 px-4 h-20">
              <div className="flex mr-2">
                <a className="cursor-pointer" href="/#top">
                  <span className="sr-only">Home</span>
                  <svg
                    className="w-8 h-8 text-green-500 fill-current"
                    id="a9528a82-5725-4f19-87ef-5a5b945e3d16"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 300">
                    <path
                      className="b3dc968a-1a88-4449-b68e-87bd7016d67f"
                      d="M274.8.45V300H220.09L89.77,111.47H87.58V300H24.25V.45H79.83l129.3,188.39h2.63V.45Z"
                    />
                  </svg>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  id="mobile-menu-button"
                  type="button"
                  onClick={toggleHidden}
                  className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="pointer-events-none h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex lg:flex-1 space-x-6">
                {menu.map(({ name, url }, index) => {
                  return (
                    <Link
                      key={`main-menu-${index}`}
                      to={url}
                      className="text-xl text-gray-700 hover:text-green-500"
                      activeClassName="text-green-500">
                      {name}
                    </Link>
                  )
                })}
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
                {socialEdges.map(({ node }) => {
                  const { id, url, icon } = node
                  return (
                    <motion.a
                      key={id}
                      whileHover={{ scale: 1.1 }}
                      href={icon === 'email' ? `mailto:${url}` : url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-green-700 text-green-500 w-6">
                      <Icon name={icon} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
          <Transition
            show={!hidden}
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transform duration-100 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
              <div
                ref={mobileMenuRef}
                className="transition-colors duration-300 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-100">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <a className="cursor-pointer" href="/#top">
                      <span className="sr-only">Me</span>
                      <svg
                        className="w-8 h-8 text-green-500 fill-current"
                        id="a9528a82-5725-4f19-87ef-5a5b945e3d16"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 300">
                        <path
                          className="b3dc968a-1a88-4449-b68e-87bd7016d67f"
                          d="M274.8.45V300H220.09L89.77,111.47H87.58V300H24.25V.45H79.83l129.3,188.39h2.63V.45Z"
                        />
                      </svg>
                    </a>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={hide}
                        className="bg-white transition-colors duration-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {menu.map(({ name, url, icon }, index) => {
                        return (
                          <Link
                            onClick={hide}
                            key={`mobile-menu-${index}`}
                            to={url}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-700"
                            activeClassName="text-green-500">
                            <div className="flex items-center justify-center w-6 text-green-500">
                              <Icon
                                className="text-green-500 text-xl"
                                name={icon}
                              />
                            </div>
                            <span className="ml-3 text-base">{name}</span>
                          </Link>
                        )
                      })}
                    </nav>
                  </div>
                </div>
                <div className="py-4 px-5">
                  <div className="flex items-center justify-end space-x-4">
                    {socialEdges.map(({ node }) => {
                      const { id, url, icon } = node
                      return (
                        <a
                          key={id}
                          href={icon === 'email' ? `mailto:${url}` : url}
                          target="_blank"
                          rel="noreferrer">
                          <Icon
                            name={icon}
                            className="text-green-500 text-xl w-6"
                          />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </header>
  )
}

export const query = graphql`
  query {
    allStrapiSocial(sort: { fields: [id], order: [ASC] }) {
      edges {
        node {
          id
          url
          icon
        }
      }
    }
  }
`

export default Header
