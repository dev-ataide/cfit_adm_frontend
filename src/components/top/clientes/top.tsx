import React from 'react'

export default function Top() {
  return (
    <div>
        <h1 className='text-cfit_title font-semibold text-4xl ml-12 mt-10'>Clientes</h1>
        <div className='h-1 w-2/5 bg-gray-200'></div>
        <div className="flex border-2 border-gray-200 rounded-md mt-5 ">
        <button
                className="rounded-tl-md rounded-bl-md px-2 py-3 hidden md:block bg-white "
                >
                <svg
                    className="w-4 h-4 fill-current text-cfit_gray"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    ></path>
                </svg>
                </button>
                <input type="text"
                className="w-full px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Nome"
                />
              
            </div>
        </div>
  )
}