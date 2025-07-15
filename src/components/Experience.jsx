import React from 'react'
import Chip from './Chip'

function Experience() {
  return (
    <section className='bg-l-gray-50 dark:bg-d-gray-50 py-12 lg:py-24'>
        <div className="container">

            <Chip text='Experience' />
            <p className='text-l-gray-600 dark:text-d-gray-600 text-center mb-6 lg:mb-12'>Here is a quick summary of my most recent experiences:</p>

            <div className='flex justify-center flex-col items-center gap-y-12'>
                <div className='card flex flex-col lg:flex-row gap-x-12 shadow-md p-8 rounded-xl bg-l-gray-default dark:bg-d-gray-default'>
                    <div className='font-bold text-accent -order-1 mb-4' >Company Name</div>
                    <div>
                        <p className='mb-4 text-l-gray-900 dark:text-d-gray-900 font-semibold'>Sr. Frontend Developer</p>
                        <ul className='flex flex-col gap-1 md:w-96 list-disc pl-4'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                            <li>Sed quis justo ac magna.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                    <div className='text-l-gray-700 dark:text-d-gray-700 -order-1 lg:order-1 mb-4'>Nov 2021 - Present</div>
                </div>
                <div className='card flex flex-col lg:flex-row gap-x-12 shadow-md p-8 rounded-xl bg-l-gray-default dark:bg-d-gray-default'>
                    <div className='font-bold text-accent -order-1 mb-4' >Company Name</div>
                    <div>
                        <p className='mb-4 text-l-gray-900 dark:text-d-gray-900 font-semibold'>Sr. Frontend Developer</p>
                        <ul className='flex flex-col gap-1 md:w-96 list-disc pl-4'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Ut pretium arcu et massa semper, id fringilla</li>
                            <li>Sed quis justo ac magna.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                    <div className='text-l-gray-700 dark:text-d-gray-700 -order-1 lg:order-1 mb-4'>Nov 2021 - Present</div>
                </div>
                <div className='card flex flex-col lg:flex-row gap-x-12 shadow-md p-8 rounded-xl bg-l-gray-default dark:bg-d-gray-default'>
                    <div className='font-bold text-accent -order-1 mb-4' >Company Name</div>
                    <div>
                        <p className='mb-4 text-l-gray-900 dark:text-d-gray-900 font-semibold'>Sr. Frontend Developer</p>
                        <ul className='flex flex-col gap-1 md:w-96 list-disc pl-4'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            
                        </ul>
                    </div>
                    <div className='text-l-gray-700 dark:text-d-gray-700 -order-1 lg:order-1 mb-4'>Nov 2021 - Present</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience