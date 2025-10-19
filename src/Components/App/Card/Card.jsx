import React, { useState, useEffect } from "react";
export default function Card() {
    const initialTime = 24 * 3600;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev <= 0 ? initialTime : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const hours = Math.floor(timeLeft / 3600)
        .toString()
        .padStart(2, "0");
    const minutes = Math.floor((timeLeft % 3600) / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    const lefColumn = [
        {
            id: 1,
            name: "شارژر دیواری 30 واتی Zolo انکر مدل Anker A2698",
            oldPrice: 1150000,
            newPrice: 950000,
            img: "../../../../public/images/anker-2698-11.jpg",
        },
        {
            id: 2,
            name: "پاوربانک 10000 میلی آمپر 22.5 واتی مک دودو مدل Mcdodo MC-4220",
            oldPrice: 1579000,
            newPrice: 1397000,
            img: "../../../../public/images/MCDODO-422-11.jpg",
        },
        {
            id: 3,
            name: "پاوربانک 10000 میلی آمپری 20 واتی وایرلس شارژ مگ سیف پاورولوژی مدل Powerology",
            oldPrice: 1150000,
            newPrice: 950000,
            img: "../../../../public/images/PPCHA34-11.jpg",
        },
    ];
    const RightColumn = [
        {
            id: 4,
            name: "ماساژور ULTRA-MINI پاورولوژی مدل Powerology SM011",
            oldPrice: 1150000,
            newPrice: 950000,
            img: "../../../../public/images/MASA-POWEROLOGY-1.jpg",
        },
        {
            id: 5,
            name: "هندزفری بلوتوثی دورگردنی مک دودو مدل Mcdodo HP-0210",
            oldPrice: 1150000,
            newPrice: 950000,
            img: "../../../../public/images/MCDODO-HP210.jpg",
        },
    ];
    return (
        <div className="card-container bg-gray-300 w-[95%] p-6 mx-auto rounded-2xl shadow-sm mt-5">
            <div className="flex justify-between items-center mb-5">
                <span className="text-gray-600 text-xl">{hours}:{minutes}:{seconds}</span>
                <h2 className="text-4xl text-gray-600 mb-3">تخفیف‌های روزانه دسترسی<span className="text-red-600 text-4xl">%</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    {lefColumn.map((p) => (
                        <div key={p.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center gap-3">
                                <img src={p.img} alt={p.name} className="w-20 h-26 object-cover rounded-lg order-2" />
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium mb-2 line-clamp-2">{p.name}</h3>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-red-500 text-xl">%{Math.round(((p.oldPrice - p.newPrice) / p.oldPrice) * 100)}تومان تخفیف</span>
                                        <span className="line-through text-gray-400 text-lg">{p.oldPrice.toLocaleString()}تومان</span>
                                    </div>
                                    <span className="block text-blue-600 font-bold mt-4 text-lg">{p.newPrice.toLocaleString()}تومان</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {RightColumn.map((p) => (
                        <div key={p.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center">
                            <img src={p.img} alt={p.name} className="mx-auto mb-3 rounded-lg h-44 object-cover" />
                            <h3 className="text-xl">{p.name}</h3>
                            <div className="text-sm mt-7">
                                <span className="block line-through text-gray-400">{p.oldPrice.toLocaleString()}تومان</span>
                                <span className="text-red-500 text-xl block mt-6">%{Math.round(((p.oldPrice - p.newPrice) / p.oldPrice) * 100)}تومان تخفیف</span>
                                <span className="text-blue-600 font-bold mt-6 text-lg block">{p.newPrice.toLocaleString()}تومان</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}