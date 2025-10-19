import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiSquareChevLeft } from "react-icons/ci";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider3() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const products = [
        { id: 1, title: 'انواع گجت های جذاب', oldprice: '320000 تومان', price: '3,990,000 تومان', image: '/images/JETFAN-11.jpg' },
        { id: 2, title: 'انواع گجت های جذاب', oldprice: '320000 تومان', price: 'موجود نیست', image: '/images/POMP-GREEN-11.jpg' },
        { id: 3, title: 'لوازم خانگی و شخصی', oldprice: '320000 تومان', price: '2,390,000 تومان', image: '/images/juser-green7-11.jpg' },
        { id: 4, title: 'انواع گجت های جذاب', oldprice: '320000 تومان', price: '2,690,000 تومان', image: '/images/MASSAGE-BALL-11.jpg' },
        { id: 5, title: 'پاوربانک و جامپ استارتر', oldprice: '320000 تومان', price: '3,685,000 تومان', image: '/images/POWEROLOGY-PPCHA77-11.jpg' },
        { id: 6, title: 'کابل شارژ تایپ سی به لایتینگ', oldprice: '320000 تومان', price: '550,000 تومان', image: '/images/MCDODO-2010-11.jpg' },
        { id: 7, title: 'پاوربانک و جامپ استارتر', oldprice: '320000 تومان', price: '3,200,000 تومان', image: '/images/50GREEN-11.jpg' },
        { id: 8, title: 'پاوربانک و جامپ استارتر', oldprice: '320000 تومان', price: '5,980,000 تومان', image: '/images/ORAIMO725-11.jpg' },
    ];

    return (
        <div className='Slider3-container'>
            <div className='bg-gray-300 rounded-2xl w-[90%] mx-auto justify-center p-3 mt-10 relative'>
                <div className="w-full mb-4 flex items-center justify-between">
                    <div className="hidden sm:flex items-center gap-2 cursor-pointer black font-semibold whitespace-nowrap">
                        <CiSquareChevLeft className="text-xl" />
                        <span className='text-xl text-gray-500'>مشاهده همه محصولات</span>
                    </div>
                    <h2 className="text-gray-500 font-bold text-2xl whitespace-nowrap">
                        همین الان موجود شد
                    </h2>
                </div>
                <Swiper
                    spaceBetween={10}
                    pagination={{
                        el: '.Slider3-pagination',
                        clickable: true,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 5, spaceBetween: 50 },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.Slider3-prev',
                        nextEl: '.Slider3-next',
                    }}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = '.Slider3-prev';
                        swiper.params.navigation.nextEl = '.Slider3-next';
                    }}
                    className="mySwiper-h"
                >
                    {products.map((p) => (
                        <SwiperSlide key={p.id} className='rounded-xl'>
                            <div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-1'>
                                <div className=' bg-gray-100 rounded-lg overflow-hidden mb-3'>
                                    <img src={p.image} alt={p.title} className='w-full h-full object-cover img' />
                                </div>
                                <p className='text-gray-400 text-sm'>{p.title}</p>
                                <div>
                                    <span className='block line-through text-gray-400 mt-5'>{p.oldprice}</span>
                                    <span className='text-blue-600 text-xl mt-5'>{p.price}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    ref={prevRef}
                    className="absolute Slider3-prev left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer text-3xl border border-gray-300"
                >
                    ‹
                </div>
                <div
                    ref={nextRef}
                    className="absolute Slider3-next right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer text-3xl border border-gray-300"
                >
                    ›
                </div>
            </div>
        </div>
    );
}
