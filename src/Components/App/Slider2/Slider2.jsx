import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

export default function Slider2() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <>
      <div className='Slider2-container'>
        <h1 className="font-bold text-center text-2xl mt-10">دسته‌بندی‌های منتخب</h1>
        <div className="relative">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper-br"
          >
            <SwiperSlide><img src="/images/handsfree.png" alt="handsfree" /></SwiperSlide>
            <SwiperSlide><img src="/images/gaming.png" alt="gaming" /></SwiperSlide>
            <SwiperSlide><img src="/images/Holder Negahdarande.png" alt="holder" /></SwiperSlide>
            <SwiperSlide><img src="/images/cable.png" alt="cable" /></SwiperSlide>
            <SwiperSlide><img src="/images/adaptor.png" alt="adaptor" /></SwiperSlide>
            <SwiperSlide><img src="/images/powerbank.png" alt="powerbank" /></SwiperSlide>
            <SwiperSlide><img src="/images/battery.png" alt="battery" /></SwiperSlide>
            <SwiperSlide><img src="/images/mobadel o rabet.png" alt="mobadel" /></SwiperSlide>
          </Swiper>
          <div className="mobile-grid">
            <img src="/images/handsfree.png" alt="handsfree" />
            <img src="/images/gaming.png" alt="gaming" />
            <img src="/images/Holder Negahdarande.png" alt="holder" />
            <img src="/images/cable.png" alt="cable" />
            <img src="/images/adaptor.png" alt="adaptor" />
            <img src="/images/powerbank.png" alt="powerbank" />
          </div>

          <div
            ref={prevRef}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 w-15 h-15 flex items-center justify-center rounded-full shadow-md cursor-pointer text-3xl border-1 border-gray-300"
          >
            ‹
          </div>
          <div
            ref={nextRef}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 w-15 h-15 flex items-center justify-center rounded-full shadow-md cursor-pointer text-3xl border-1 border-gray-300"
          >
            ›
          </div>
        </div>
      </div>
    </>
  );
}