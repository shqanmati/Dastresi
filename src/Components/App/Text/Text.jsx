const Text = () => {
    const items = [
        {
            id: 1,
            img: "/public/images/icon1.png",
            title: "امکان خرید حضوری",
            desc: "مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت مراجعه نمایید.",
        },
        {
            id: 2,
            img: "/public/images/icon3.png",
            title: "ارسال سریع",
            desc: "ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت می‌گیرد.",
        },
        {
            id: 3,
            img: "/public/images/icon4.png",
            title: "قیمت مناسب با بالاترین کیفیت",
            desc: "گروه دسترسی در تلاش است که کالای با کیفیت را با مناسب‌ترین قیمت به دست شما برساند.",
        },
        {
            id: 4,
            img: "/public/images/icon2.png",
            title: "مشاوره تخصصی برای خرید محصول",
            desc: "برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب را انجام دهید.",
        },
    ];

    return (
        <div className="w-[90%] mx-auto text-center mt-12">
            {/* عنوان بخش */}
            <h2 className="text-2xl font-bold mb-10 text-gray-800">
                چرا دسترسی رو برای خرید انتخاب کنیم؟
            </h2>

            {/* آیکون‌ها */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center text-center"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-16 h-16 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-400 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-900 text-sm leading-6 px-2">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Text;
