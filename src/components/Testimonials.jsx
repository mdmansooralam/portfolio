import React from 'react'
import Chip from './Chip'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation,  Scrollbar, A11y} from 'swiper/modules'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function Testimonials() {
    return (
        <section className='py-12 lg:py-24 bg-l-gray-50 dark:bg-d-gray-50'>
            <div className="container">
                <Chip text={'Testimonials'} />
                <p className='mb-6 lg:mb-12 text-center '>Nice things people have said about me:</p>
                <div className='gap-6 lg:gap-12 flex flex-col lg:flex-row justify-center  relative w-full overflow-hidden'>
                    {/* <button className='hidden lg:block absolute left-0'>Prev</button>
                    <button className='hidden lg:block absolute right-0'>Next</button> */}

                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                        }}

                        modules={[Pagination, Navigation]}
                        spaceBetween={50}
                        pagination={
                            {
                                clickable: true,
                                // el:'.hehehe'
                            }
                        }
                        loop='true'
                        className='!py-20'
                        centeredSlides={true}
                    >
                        <SwiperSlide>
                            {({isActive})=> (

                            <div className={`card max-w-96 p-8 lg:p-12 bg-l-gray-default dark:bg-d-gray-default rounded-xl shadow-md flex flex-col gap-y-6 items-center ${isActive && 'scale-110'}`}>
                                <div className='aspect-square rounded-full w-16 bg-accent'></div>
                                <p className='text-center'>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
                                <p className='text-l-gray-900 dark:text-d-gray-900 text-xl font-semibold mb-1'>John Doe</p>
                                <p className='text-sm'>Founder - xyz.com</p>
                            </div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide>
                            {({isActive})=> (

                            <div className={`card max-w-96 p-8 lg:p-12 bg-l-gray-default dark:bg-d-gray-default rounded-xl shadow-md flex flex-col gap-y-6 items-center ${isActive && 'scale-110'}`}>
                                <div className='aspect-square rounded-full w-16 bg-accent'></div>
                                <p className='text-center'>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
                                <p className='text-l-gray-900 dark:text-d-gray-900 text-xl font-semibold mb-1'>John Doe</p>
                                <p className='text-sm'>Founder - xyz.com</p>
                            </div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide>
                            {({isActive})=> (

                            <div className={`card max-w-96 p-8 lg:p-12 bg-l-gray-default dark:bg-d-gray-default rounded-xl shadow-md flex flex-col gap-y-6 items-center ${isActive && 'scale-110'}`}>
                                <div className='aspect-square rounded-full w-16 bg-accent'></div>
                                <p className='text-center'>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
                                <p className='text-l-gray-900 dark:text-d-gray-900 text-xl font-semibold mb-1'>John Doe</p>
                                <p className='text-sm'>Founder - xyz.com</p>
                            </div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide>
                            {({isActive})=> (

                            <div className={`card max-w-96 p-8 lg:p-12 bg-l-gray-default dark:bg-d-gray-default rounded-xl shadow-md flex flex-col gap-y-6 items-center ${isActive && 'scale-110'}`}>
                                <div className='aspect-square rounded-full w-16 bg-accent'></div>
                                <p className='text-center'>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
                                <p className='text-l-gray-900 dark:text-d-gray-900 text-xl font-semibold mb-1'>John Doe</p>
                                <p className='text-sm'>Founder - xyz.com</p>
                            </div>
                            )}
                        </SwiperSlide>
                        
                    </Swiper>


                </div>
                    <div className="hehehe flex justify-center gap-3 "></div>
            </div>


        </section>
    )
}

export default Testimonials