import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => (
  <div className="m-auto content-center justify-content-center sm:m-0 p-8 pt-16 w-64 h-screen bg-gray-100">
    <div className="font-vidaloka flex flex-col text-gray-500 text-2xl font-vida">
      Inspiration
    </div>
    <div className="flex flex-col text-gray-500 mt-6 mb-12 leading-7">
      Curated quotes from tech conferences for entrepreneurs
    </div>

    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400"
      to="/"
      activeClassName="text-black"
    >
      Last Quote
    </Link>
    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400"
      to="/random"
      activeClassName="text-black"
    >
      Random
    </Link>
    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 py-4"
      to="/all"
      activeClassName="text-black"
    >
      All
    </Link>
    <div className="flex flex-col mt-2 mb-4 bg-gray-300 text-gray-500 hover:text-black font-bold py-2 px-4 rounded w-full text-center">
      <a href="mailto:dleuliette@gmail.com?subject=New%20quote&body=title:%20author_name:%20author_twitter:">
        Contribute by email
      </a>
    </div>
    <div className="flex flex-col mt-4 mb-4 bg-blue-500 hover:text-white text-gray-300 font-bold py-2 px-4 rounded w-full text-center">
      <a
        href="https://displate.com/flexbox/displates"
        rel="noreferrer"
        target="_blank"
      >
        Buy a frame
      </a>
    </div>
  </div>
)

export default Sidebar
