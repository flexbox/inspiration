import React from 'react'

const QuoteItem = quote => {
  return (
    <div
      id="Section"
      className="max-w-screen-md rounded bg-white shadow transition duration-500 ease-in-out transform hover:shadow hover:scale-4"
    >
      <div id="blockquote" className="text-center m-4 p-4">
        <div
          id="Title"
          className="font-vidaloka font-semibold pt-12 pb-6 text-5xl"
        >
          {quote.title}
        </div>
        <hr
          className="flex m-auto my-4 p-0 border-0 border-b-2"
          width="100px"
        />
        <div
          id="cite"
          className="uppercase opacity-6 tracking-wider pt-8 pb-12"
          as="cite"
        >
          {quote.author}
        </div>
      </div>
    </div>
  )
}

export default QuoteItem
