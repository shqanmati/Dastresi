import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // 👈 Autoplay اضافه شد
import "./styles.css";

export default function Slider5() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const img = [
        { id: 1, image: "/public/images/Untitled-159.jpg" },
        { id: 2, image: "/public/images/inoben.jpg" },
        { id: 3, image: "/public/images/logo-1.jpg" },
        { id: 4, image: "/public/images/Untitled-1 (2).jpg" },
        { id: 5, image: "/public/images/logo.jpg" },
        { id: 6, image: "/public/images/logp.jpg" },
        { id: 7, image: "/public/images/H64c19886758b40378c31d5f46c5ae984A.jpg" },
    ];

    return (
        <>
            <h1 className="text-2xl text-gray-400 font-bold text-end mr-10 mt-5">محبوب ترین برندها</h1>
            <div className="relative Slider5-container mt-10">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {img.map((p) => (
                        <SwiperSlide key={p.id} className="!overflow-visible">
                            <div className="w-40 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-1 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="max-h-10 object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    ref={prevRef}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer text-3xl border border-gray-300"
                >
                    ‹
                </div>
                <div
                    ref={nextRef}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer text-3xl border border-gray-300"
                >
                    ›
                </div>
            </div>
        </>
    );
}