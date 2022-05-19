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
            <div className="flex items-center justify-between h-20 px-4 py-4 transition-colors duration-300 border-b-2 border-gray-100 md:justify-start md:space-x-4">
              <div className="flex mr-2">
                <a className="cursor-pointer" href="/#top">
                  <span className="sr-only">Home</span>
                  <svg
                    className="w-8 h-8 fill-current text-emerald-500"
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
              <div className="-my-2 -mr-2 md:hidden">
                <button
                  id="mobile-menu-button"
                  type="button"
                  onClick={toggleHidden}
                  className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400">
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="w-6 h-6 pointer-events-none"
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
              <nav className="hidden space-x-6 text-gray-700 md:flex lg:flex-1">
                {menu.map(({ name, url }, index) => (
                  <Link
                    key={`main-menu-${index}`}
                    to={url}
                    className="text-xl hover:text-emerald-500"
                    activeClassName="text-emerald-500">
                    {name}
                  </Link>
                ))}
              </nav>
              <div className="items-center justify-end hidden space-x-4 md:flex md:flex-1 lg:w-0">
                {socialEdges.map(({ node }) => {
                  const { id, url, icon } = node
                  return (
                    <motion.a
                      key={id}
                      whileHover={{ scale: 1.1 }}
                      href={icon === 'email' ? `mailto:${url}` : url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-6 text-emerald-500 hover:text-emerald-700">
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
            <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden">
              <div
                ref={mobileMenuRef}
                className="transition-colors duration-300 bg-white divide-y-2 divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <a className="cursor-pointer" href="/#top">
                      <span className="sr-only">Me</span>
                      <svg
                        className="w-8 h-8 fill-current text-emerald-500"
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
                        className="inline-flex items-center justify-center p-2 text-gray-400 transition-colors duration-300 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400">
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="w-6 h-6"
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
                    <nav className="grid text-gray-700 gap-y-8">
                      {menu.map(({ name, url, icon }, index) => (
                        <Link
                          onClick={hide}
                          key={`mobile-menu-${index}`}
                          to={url}
                          className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                          activeClassName="text-emerald-500">
                          <div className="flex items-center justify-center w-6 text-emerald-500">
                            <Icon
                              className="text-xl text-emerald-500"
                              name={icon}
                            />
                          </div>
                          <span className="ml-3 text-base">{name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-4">
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
                            className="w-6 text-xl text-emerald-500"
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
