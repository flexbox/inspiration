import React from 'react'

const QuoteItem = quote => {
  return (
    <div className="max-w-screen-md rounded bg-white shadow transition duration-500 ease-in-out transform hover:shadow hover:scale-4">
      <div className="text-center m-4 p-4">
        <div className="font-vidaloka font-semibold pt-12 pb-6 text-5xl">
          {quote.title}
        </div>
        <hr
          className="flex m-auto my-4 p-0 border-0 border-b-2"
          width="100px"
        />
        <div className="uppercase opacity-6 tracking-wider pt-8 pb-12">
          {quote.author}
        </div>
      </div>
    </div>
  )
}

export default QuoteItem
