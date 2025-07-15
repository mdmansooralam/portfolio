import React from 'react'
import image from '../assets/images/pic-full.jpg'

function About() {
  return (
    <section className='py-16 lg:py-24 bg-l-gray-50  dark:bg-d-gray-50'>
        <div className="container">
            <div className='text-center text-sm font-medium mb-6 lg:mb-12'><span className='inline-block py-1 rounded-xl px-5 bg-l-gray-200 dark:bg-d-gray-200 text-l-gray-600 dark:text-d-gray-600'>About me</span></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-12'>
                <div className='flex justify-center lg:justify-start'>
                    <div className='relative w-1/2 after:content-[] lg:after:right-10 lg:after:-inset-10 lg:after:top-10 after:-left-5 after:-right-5 after:border-8 after:border-l-gray-50 dark:after:border-d-gray-50 after:top-10 after:inset-0 after:-bottom-5 after:block after:absolute after:bg-l-gray-200 dark:after:bg-d-gray-200'>

                        <div className='border-8 w-full   relative z-10   border-l-gray-50   dark:border-d-gray-50'>
                            <img src={image} alt="image" className='w-full' />
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <h2 className='mb-6 text-center lg:text-start text-l-gray-900 dark:text-d-gray-900 font-semibold text-4xl'>Curious about me? Here you have it:</h2>
                    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                    <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    <p>Finally, some quick bits about me.</p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About