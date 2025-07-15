import React from 'react'
import {iconJavascript, skills} from '../assets/icons'
import Chip from './Chip'

function Skills() {

  return (
    <section className='py-16 lg:py-24'>
        <div className="container">
            <Chip text={'Skills'} />
            <p className='text-l-gray-600 dark:text-d-gray-600 text-center mb-6 lg:mb-12'>The skills, tools and technologies I am really good at:</p>

            <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-y-12 justify-between'>
                {skills.map((sk, i)=> (
                <div className='flex flex-col items-center' key={i}>
                    <img src={sk.icon} className='aspect-square w-16 mb-3' />
                    <p>{sk.text}</p>
                    
                </div>
            ))}
            </div>
        </div>
       
    </section>
  )
}

export default Skills