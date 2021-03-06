import userData from '../constants/data'
import React from 'react'

export default function Experience() {
  return (
    <section className='bg-white'>
      <div className='max-w-6xl mx-auto h-48'>
        <h1 className='text-gray-800 text-6xl md:text-7xl lg:text-9xl font-bold px-5 py-10 lg:py-20 text-center md:text-left'>
          Experience
        </h1>
      </div>
      <div className='bg-[#e7e7e7] -mt-10'>
        <div className='grid grid-cols-1 max-w-xl mx-auto pt-20 lg:pt-40'>
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className='divider-container flex flex-col items-center -mt-2'>
                  <div className='w-4 h-4 bg-green-500 rounded-full relative z-10'>
                    <div className='w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping'></div>
                  </div>
                  <div className='w-1 h-24 bg-gray-300 rounded-full -mt-2'></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className='relative experience-card border p-4 rounded-md shadow-xl bg-white  z-10 mx-4'>
      <h1 className='absolute -top-10 md:-left-20 md:-top-10 text-md md:text-2xl text-gray-400 font-bold '>
        {year}
      </h1>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <a href={companyLink} className='text-gray-500'>
        {company}
      </a>
      <p className='text-gray-600  my-2'>{desc}</p>
    </div>
  )
}
