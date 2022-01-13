import React from 'react'
import userData from '../constants/data'

export default function Projects() {
  return (
    <section className='bg-white'>
      <div className='max-w-6xl mx-auto h-48'>
        <h1 className='text-gray-800 text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
          Projects
        </h1>
      </div>
      <div className='bg-[#e7e7e7] -mt-10'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 md:pt-36 pb-14'>
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className='w-full block shadow-2xl'>
      <div className='relative overflow-hidden'>
        <div className='h-72 object-cover'>
          <img
            src={imgUrl}
            alt='portfolio'
            className='transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full'
          />
        </div>
        <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2 py-1'>
          {title}
        </h1>
        <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-2xl'>
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  )
}
