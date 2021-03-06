import React from 'react'
import userData from '../constants/data'

export default function AboutMe() {
  return (
    <section className='bg-white'>
      <div className='max-w-6xl mx-auto h-48'>
        <h1 className='text-gray-800 text-6xl md:text-7xl lg:text-9xl font-bold px-5 py-10 lg:py-20 text-center md:text-left'>
          About Me.
        </h1>
      </div>
      <div className='bg-[#e7e7e7] -mt-10'>
        <div className='text-container max-w-6xl mx-auto pt-10 lg:pt-24'>
          <p
            className='leading-loose text-2xl md:text-4xl font-semibold mx-4'
            style={{ lineHeight: '3rem' }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className='bg-[#e7e7e7] px-4'>
        <div className='pt-12 lg:pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-10 gap-x-10 lg:gap-y-20 lg:gap-x-20'>
          {/* Social Buttons */}
          <div className='inline-flex flex-col'>
            <div>
              <h1 className='text-xl font-semibold text-gray-700'>Contact</h1>
              <p className='text-lg text-gray-500 mt-4'>
                For any sort of help or enquiry, please send a{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className='text-gray-800 border-b-2 border-gray-800  font-bold'
                >
                  email
                </a>{' '}
                and I'll get back to you.
              </p>
            </div>

            {/* Social Links */}
            <h1 className='text-xl font-semibold text-gray-700 mt-8'>
              Social Links
            </h1>
            <div className='mt-4 ml-4'>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.socialLinks.github}
                  className='flex flex-row items-center space-x-4 group'
                >
                  <div className='my-4'>&rarr;</div>
                  <p className='text-lg text-gray-500 font-mono relative overflow-hidden'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.socialLinks.linkedin}
                  className='flex flex-row items-center space-x-4 group'
                >
                  <div className='my-4'>&rarr;</div>
                  <p className='text-lg text-gray-500 font-mono relative overflow-hidden'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className='col-span-1 md:col-span-2'>
            {userData.about.description?.map((desc, idx) => (
              <p key={idx} className='text-xl text-gray-700 mb-4'>
                {desc}
              </p>
            ))}

            <h1 className='bg-red-500 mt-8 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50'>
              Tech Stack
            </h1>
            <div className='flex flex-row flex-wrap mt-8'>
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png'
                className='h-20 w-20 mx-4 my-4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
