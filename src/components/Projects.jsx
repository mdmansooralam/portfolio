import React from 'react'
import Chip from './Chip'
import {HiOutlineExternalLink} from 'react-icons/hi'
import restaurantProject from '../assets/images/restaurant-project.jpg'
import nexcentProject from '../assets/images/nexcent-project.jpg'
import cyferBlockchainProject from '../assets/images/cyfer-blockchain-project.jpg'

function Projects() {
    return (
        <section className='py-12 lg:py-24' id='projects'>
            <div className="container">

                <Chip text='Projects' />
                <p className='text-center text-l-gray-600 dark:text-d-gray-600 mb-6 lg:mb-12'>Some of the noteworthy projects I have built:</p>
                <div className='flex flex-col gap-y-6 lg:gap-y-12'>
                    <div className="card flex shadow-md rounded-xl flex-col lg:flex-row">
                        <div className='lg:w-1/2 p-8 lg:p-12 bg-l-gray-50 dark:bg-d-gray-50'>
                            <div className='w-full h-full rounded-xl overflow-hidden shadow-lg'>
                                <img src={restaurantProject} alt="" />
                            </div>
                        </div>
                        <div className='p-8 lg:p-12 lg:w-1/2'>
                            <p className='text-l-gray-900 dark:text-d-gray-900 font-semibold text-xl mb-6'>Restaurant Where Food Meets Creativity</p>
                            <p className='text-l-gray-600 dark:text-d-gray-600 mb-6'>
                                A visually rich frontend practice project for a restaurant website—designed to showcase creative UI elements, menu layouts, and smooth user experience using HTML, CSS, and JavaScript.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                <Chip text='HTML'/>
                                <Chip text='CSS'/>
                                <Chip text='Javascript'/>
                                <Chip text='Git'/>
                            </div>
                            <div className='text-2xl p-1.5'><HiOutlineExternalLink className='text-2xl'/></div>
                        </div>
                    </div>

                    <div className="card flex shadow-md rounded-xl flex-col lg:flex-row">
                        <div className='lg:w-1/2 p-8 lg:p-12 bg-l-gray-50 dark:bg-d-gray-50'>
                            <div className='w-full h-full rounded-xl overflow-hidden shadow-lg'>
                                <img src={nexcentProject} alt="" />
                            </div>
                        </div>
                        <div className='p-8 lg:p-12 lg:w-1/2 lg:-order-1'>
                            <p className='text-l-gray-900 dark:text-d-gray-900 font-semibold text-xl mb-6'>Nexcent Centralized Community</p>
                            <p className='text-l-gray-600 dark:text-d-gray-600 mb-6'>
                                A static community platform prototype developed with frontend technologies to explore layout, branding, and responsiveness. Nexcent is ideal for demonstrating design-focused development skills.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                <Chip text='HTML'/>
                                <Chip text='CSS'/>
                                <Chip text='Javascript'/>
                                <Chip text='Git'/>
                            </div>
                            <div className='text-2xl p-1.5'><HiOutlineExternalLink className='text-2xl'/></div>
                        </div>
                    </div>

                    <div className="card flex shadow-md rounded-xl flex-col lg:flex-row">
                        <div className='lg:w-1/2 p-8 lg:p-12 bg-l-gray-50 dark:bg-d-gray-50'>
                            <div className='w-full h-full rounded-xl overflow-hidden shadow-lg'>
                                <img src={cyferBlockchainProject} alt="" />
                            </div>
                        </div>
                        <div className='p-8 lg:p-12 lg:w-1/2'>
                            <p className='text-l-gray-900 dark:text-d-gray-900 font-semibold text-xl mb-6'>Cyfer Blockchain</p>
                            <p className='text-l-gray-600 dark:text-d-gray-600 mb-6'>
                                Cyfer Blockchain is a frontend simulation of blockchain fundamentals, showcasing concepts like block structure, cryptographic hashing, and proof-of-work—developed purely with JavaScript, no backend involved.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                <Chip text='HTML'/>
                                <Chip text='CSS'/>
                                <Chip text='Javascript'/>
                                <Chip text='Bootstrap'/>
                                <Chip text='Git'/>
                            </div>
                            <div className='text-2xl p-1.5'><HiOutlineExternalLink className='text-2xl'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects