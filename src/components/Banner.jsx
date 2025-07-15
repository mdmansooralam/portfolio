import React from 'react'
import img from '../assets/images/pic-full.jpg'
import face from '../assets/images/face-pic.jpg'
import { MapPinIcon  } from '@heroicons/react/24/outline';
import { FiGithub } from "react-icons/fi";
import { LuFigma , LuGithub, LuTwitter  } from "react-icons/lu";




function Banner() {
    return (
        <section className='lg:py-24 py-16  dark:bg-d-gray-default'>
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start">
                <div className='w-full lg:w-[60%] shrink-0 py-2.5 text-center md:text-left'>
                    <h1 className='mb-2 text-center lg:text-start  text-l-gray-900 dark:text-d-gray-900 text-4xl lg:text-7xl font-bold tracking-[2%]'>Hi, I’m Mansoor</h1>
                    <span className='text-center lg:text-start  text-l-gray-900 dark:text-d-gray-900 text-2xl lg:text-4xl font-bold my-6 inline-block'>Fullstack Developer</span>
                    <p className='mb-12 text-center lg:text-start'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    <div className='mb-2 flex gap-2 justify-center lg:justify-start'><MapPinIcon  className='aspect-square w-6' /> Darbhanga, India</div>
                    <div className='mb-12 flex gap-2  justify-center lg:justify-start'> <div className='aspect-square w-6 text-center'><span className='inline-block aspect-square w-2 bg-accent rounded-full'></span></div> Available for new projects</div>
                    <div className='flex gap-1 justify-center lg:justify-start'>
                        <a href='#' aria-label='github link' className='p-1.5'><LuGithub size={24} /></a>
                        <a href='#' aria-label='twitter link' className='p-1.5'><LuTwitter size={24}/></a>
                        <a href='#' aria-label='figma link' className='p-1.5'><LuFigma size={24}/></a>
                    </div>
                </div>
                <div className='w-full lg:w-auto grow pb-20 flex justify-center lg:justify-end'>
                    <div className='relative w-1/2 after:content-[] lg:after:left-10 lg:after:-inset-10 lg:after:top-10 after:-left-5 after:-right-5 after:border-8 after:border-l-gray-default dark:after:border-d-gray-default after:top-10 after:inset-0 after:-bottom-5 after:block after:absolute after:bg-l-gray-200 dark:after:bg-d-gray-200'>
                        <div className='border-8 w-full   relative z-10   border-l-gray-default dark:border-d-gray-default'>
                            <img src={face} alt="" className='w-full' />
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner