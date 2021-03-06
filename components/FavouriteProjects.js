import React from 'react'
import Link from 'next/link'

export default function FavouriteProjects() {
  return (
    <div className='bg-[#e7e7e7] md:-mt-40'>
      <div className='max-w-6xl mx-auto'>
        <header className='flex flex-col md:flex-row justify-between items-center pt-10 md:pt-40 mx-10 md:my-0'>
          <h1 className='text-6xl lg:text-9xl max-w-lg font-bold text-gray-800 my-20 md:mb-12 md:mt-0 md:text-whit text-center'>
            Favourite Projects
          </h1>
          <Link href='/projects'>
            <a className='hidden lg:flex flex-row lg:space-x-4 lg:items-center mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-up-right-square'
                stroke='4'
                strokeWidth='4'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
                />
              </svg>
              <p>View all</p>
            </a>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className='px-5 grid md:grid-cols-3 gap-8 lg:-mt-7 pb-12 lg:pb-40'>
          {/* Single card */}
          <a
            href='https://github.com/gregchlosta/cookify'
            className='w-full block col-span-3 shadow-2xl'
          >
            <div className='relative overflow-hidden'>
              <img
                src='/cookify.jpg'
                alt='cookify'
                className='transform hover:scale-125 transition duration-2000 ease-out'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold bg-red-500 rounded-md px-2 py-1 text-4xl'>
                Cookify
              </h1>
              <h1 className='absolute bottom-10 left-10 text-black font-bold text-4xl'>
                01
              </h1>
            </div>
          </a>

          {/* Single card */}
          <a
            href='https://github.com/gregchlosta/insta-clone'
            className='w-full block col-span-3  sm:col-span-2 shadow-2xl'
          >
            <div className='relative overflow-hidden'>
              <img
                src='/insta.jpg'
                alt='insta-clone'
                className='transform hover:scale-125 transition duration-2000 ease-out'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-2xl bg-red-500 rounded-md px-2 py-1'>
                Insta-Clone
              </h1>
              <h1 className='absolute bottom-10 left-10 text-black font-bold text-2xl'>
                02
              </h1>
            </div>
          </a>

          {/* Single card */}
          <a
            href='https://github.com/gregchlosta/node-file-upload'
            className='w-full block col-span-3 sm:col-span-1  object-cover'
          >
            <div className='relative overflow-hidden shadow-2xl'>
              <img
                src='/node.jpg'
                alt='node file uploader'
                className='transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-lg bg-red-500 rounded-md px-2 py-1'>
                Node File Uploader
              </h1>
              <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-2xl'>
                03
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
