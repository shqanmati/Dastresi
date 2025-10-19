import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiSquareChevLeft } from "react-icons/ci";
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination,Autoplay  } from 'swiper/modules';

export default function Slider6() {
    const Slide = [
        {
            id: 1,
            image: '/public/images/Maintenance-of-iPhone-cable-dastresiArtboard 1 copy.jpg',
            name: 'مشکلات رایج کابل شارژ آیفون و راه حل های آن',
        },

        {
            id: 3,
            image: '/public/images/what-is-mfi-apple-dastresi-Artboard 1 copy 3.jpg',
            name: 'کابل MFi چیست؟ : ناجی باتری آیفون شما یا یک حقه تبلیغاتی؟',
        },
        {
            id: 4,
            image: '/public/images/Why-iPhone-is-not-charging- dastresiArtboard 1 copy (1).jpg',
            name: 'چرا آیفون من شارژ نمی‌شود؟ راهنمای رفع مشکل',
        },
        {
            id: 5,
            image: '/public/images/Microphone-under-1-millionArtboard 1 (1).jpg',
            name: 'راهنمای خرید بهترین میکروفون زیر ۱ میلیون تومان',
        },
        {
            id: 6,
            image: '/public/images/best-smelling-microphone-dastresi-Artboard 1 copy 2 (1).jpg',
            name: 'معرفی ۵ مدل از بهترین میکروفون بویا',
        },
        {
            id: 7,
            image: '/public/images/wired-handsfree-phone-dastresi-.jpg',
            name: 'خرید بهترین هندزفری سیمی تا ۵۰۰ تومان',
        },
        {
            id: 8,
            image: '/public/images/iphone-cable-charger-dastresiArtboard 1.jpg',
            name: 'بهترین کابل شارژ برای آیفون: راهنمای کامل انتخاب در ۵ دقیقه!',
        },
    ];
    return (
        <>
            <div className='Slider6-container mt-30'>
                <div className="w-full mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer black font-semibold whitespace-nowrap ml-7">
                        <CiSquareChevLeft className="text-xl" />
                        <span className='text-xl text-gray-500 hover:text-blue-600'>ورود به بلاگ</span>
                    </div>
                    <h2 className="text-gray-500 font-bold text-2xl whitespace-nowrap mr-7">
                        آخرین مقالات
                    </h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    modules={[Pagination,Autoplay]}
                    className="mySwiper"
                >
                    {Slide.map((p) => (
                        <SwiperSlide key={p.id}>
                            <div className=' rounded-lg overflow-hidden mb-10 shadow-xl h-full justify-center '>
                                <a href="/" className='hover:text-blue-600'>
                                <img src={p.image} alt={p.title} className='w-full h-full object-cover mb-5' />
                                <p className='text-sm mb-10 vazir'>{p.name}</p>
                                </a>
                            </div>
                            
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    );
}
