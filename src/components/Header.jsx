import { useEffect, useState } from "react"
import { useTheme } from "../hooks/useTheme"
// import { Link } from "react-router-dom"
import {Link} from 'react-router-dom'

const Header = () => {

    const [collapse, setCollapse] = useState(true)
    const {theme, setTheme} = useTheme()

  return (
    <header className="fixed w-full top-0 bg-l-gray-default dark:bg-d-gray-default z-50">
        <nav className='py-4 dark:bg-gray-950'>
            <div className="container flex justify-between items-center flex-wrap">
                <a href='#'>Logo</a>
                <button className='navbar-toggler lg:hidden cursor-pointer text-l-gray-600' onClick={()=> setCollapse(!collapse)}>
                    {collapse ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>}
                </button>
                <div className={`basis-full lg:basis-auto max-h-0 lg:max-h-screen overflow-hidden ${collapse? '':'max-h-screen'} flex-col lg:flex-row lg:items-center flex transition-all duration-500`}>
                    <ul className='flex flex-col lg:flex-row text-l-gray-600 dark:text-d-gray-600 font-medium gap-4 py-4 lg:py-0 lg:gap-6 border-b border-gray-100 lg:border-0'>

                        <li><Link to="#works">About</Link></li>
                        <li><a href='#works'>Projects</a></li>
                        <li><a href='#'>Testimonials</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                    <div className="py-4 lg:py-0 flex flex-col lg:flex-row gap-4 lg:items-center lg:ml-12 w-full lg:w-auto">
                        <button onClick={()=>setTheme(theme === 'dark'? 'light' : 'dark')} className="cursor-pointer flex justify-between text-l-gray-600 hover:rotate-45 transition-all duration-500 dark:text-d-gray-600 "><span className="lg:hidden">Switch Theme</span>
                            {
                                theme === 'dark'? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>

                            }
                        </button>
                        <a href={'https://res.cloudinary.com/dw0ktpdca/image/upload/v1750165039/Resume-Mansoor_rktscx.pdf'} target="_blank"  className='cursor-pointer bg-gray-900 dark:bg-d-gray-900 text-l-gray-50 dark:text-d-gray-50 py-1.5 px-4 w-full block rounded-xl  font-medium'>Download CV</a>
                    </div>
                    
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header