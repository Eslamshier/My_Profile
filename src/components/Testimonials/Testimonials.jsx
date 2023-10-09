import React from 'react';
import './Testimonials.css';
import Avtar1 from '../../assets/avatar1.jpg';
import Avtar2 from '../../assets/avatar2.jpg';
import Avtar3 from '../../assets/avatar3.jpg';
import Avtar4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avtar: Avtar1,
        name: 'Amira Taher',
        review: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!"
    },
    {
        avtar: Avtar2,
        name: 'Ahmend Aziz',
        review: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!"
    },
    {
        avtar: Avtar3,
        name: ' Khaled Rehaim',
        review: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!"
    },
    {
        avtar: Avtar4,
        name: 'Mona Ahmed',
        review: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!"
    },
]

function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from client</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials-container'
                // install Swiper modules
                modules={[ Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
                {
                    data.map(({ avtar, name, review }, index) => {
                        return (
                            <SwiperSlide className='testimonial'  key={index}>
                                <div className='client-avatar'>
                                    <img src={avtar} alt='testimonials-image1'></img>
                                </div>
                                <h5 className='client-name'>{name}</h5>
                                <small className='client-review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials