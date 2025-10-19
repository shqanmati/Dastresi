import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './styles.css';
import Image from "/images/banner-dastresi-1 (1).png"
import Image2 from "/images/banner-dastresi-2-min.png"
import Image3 from "/images/banner-dastresi-4-min.png"

// import required modules
import { Autoplay, Pagination, Navigation , EffectFade } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className='Slider-container mt-40'>
      <Swiper
      effect={"fade"}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation,EffectFade]}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide><img src={Image}/></SwiperSlide>
        <SwiperSlide><img src={Image2}/></SwiperSlide>
        <SwiperSlide><img src={Image3}/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}