import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="mt-20 m-auto flex flex-col max-w-screen-md rounded bg-white shadow transition duration-500 ease-in-out transform hover:shadow hover:scale-4 items-center">
      <div className="m-auto flex flex-col items-center text-center p-4">
        <p className="font-vidaloka text-3xl">
          Sorry, this page does not exist anymore
        </p>
      </div>
      <div className="m-auto flex flex-col items-center">
        <p>Page 404</p>
        <Link className="text-blue-400 underline pb-4 pt-4 text-xl" to="/">
          Go back home
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
