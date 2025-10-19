import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/NavbarSlice/NavbarSlice";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
    useEffect(() => {
    const toggle = document.querySelector(".menu-toggle");
    const toggleMenu = () => {
      document.body.classList.toggle("menu-open");
    };
    if (toggle) toggle.addEventListener("click", toggleMenu);
    return () => {
      if (toggle) toggle.removeEventListener("click", toggleMenu);
    };
  }, []);
    return (
        <>
            <button className="menu-toggle">☰</button>
            <nav className="w-full bg-base-100 shadow-sm fixed top-0">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-3">
                    <div className="flex">
                        <div className="flex items-center">
                            <button className="btn btn-primary mr-7 ml-15 hover:bg-blue-950 rounded-2xl">
                                خرید و ثبت نام
                            </button>
                            <button className="btn mr-72 text-red-600 hover:text-black text-lg">
                                <FaShoppingCart />
                            </button>
                        </div>
                        <ul className="flex text-center">
                            <li className="mt-5"><a href="/" className="text-gray-400 text-sm font-bold mr-5 whitespace-nowrap hover:text-blue-950" >درباره ما</a></li>
                            <li className="mt-5"><a href="/" className="text-gray-400 text-sm font-bold mr-5 whitespace-nowrap hover:text-blue-950" >ارتباط با ما</a></li>
                            <li className="mt-5"><a href="/" className="text-gray-400 text-sm font-bold mr-5 whitespace-nowrap hover:text-blue-950" >بلاگ</a></li>
                            <li className="mt-5"><a href="/" className="text-gray-400 text-sm font-bold mr-5 whitespace-nowrap hover:text-blue-950" >باشگاه مشتریان</a></li>
                        </ul>
                        <div className="relative w-90 top-3.5">
                            <CiSearch className="absolute right-3 text-3xl top-1 text-gray-400" />
                            <input type="text" placeholder="جستجو محصولات" className="w-full vazir text-right pr-10.5 py-2 shadow font-bold bg-gray-100 rounded-xl focus:outline-none focus:ring-blue-900 hover:bg-white" />
                        </div>
                        <div className="w-25 mt-5 ml-8.5">
                            <img
                                alt="logo"
                                src="../../../public/images/logo.png" />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-sm text-gray-500 mt-1.5">
                        <div className="dropdown dropdown-hover">
                            <a href="" className="m-1 hover:text-red-500 flex items-center relative  after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"><FaCaretDown className="mr-3" />برندها

                            </a>
                            <div className="dropdown-content bg-base-100 shadow z-[1] w-7xl grid grid-cols-5 gap-x-6 gap-y-2 text-right mt-2">
                                <div className="border-r p-1">
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Neekin</a><span>نیکین</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>pioneer</a><span>پایونیر</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>GP</a><span>جی پی</span> </p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>A4tech</a><span >ای فورتک</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>1more</a><span>وان مور</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Maxell</a><span >مکسل</span></p></a>
                                </div>
                                <div className="border-r p-1">
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Anker</a><span>انکر</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>inoben</a><span>اینوبن</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Momax</a><span>مومکس</span> </p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Wastern Digital</a><span >وسترن دیجیتال</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Xioami</a><span>شیائومی</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Panasonic</a><span >پاناسونیک</span></p></a>
                                </div>
                                <div className="border-r p-1">
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Baseus</a><span>بیسوس</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Boya</a><span>بویا</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Mcdodo</a><span>مک دودو</span> </p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Powerology</a><span >پاورولوژی</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Ravpower</a><span>راوپار</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Aukey</a><span >آکی</span></p></a>
                                </div>
                                <div className="border-r p-1">
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>yesido</a><span>یسیدو</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Naztech</a><span>نزتک</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>ProOne</a><span>پرووان</span> </p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Ldinio</a><span >ال دی نیو</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Duracell</a><span>دوراسل</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Somo</a><span >سومو</span></p></a>
                                </div>
                                <div className="p-1">
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Haylou</a><span>هایلو</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Die Hard</a><span>دای هارد</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>SkullCandy</a><span>اسکال کندی</span> </p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Apple</a><span >اپل</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Camelion</a><span>کملیون</span></p></a>
                                    <a href="/"><p className="flex justify-between hover:bg-gray-300 hover:text-blue-700"><a>Koluman Plus</a><span >کلومن پلاس</span></p></a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown dropdown-hover">
                            <a href="/" className="m-1 hover:text-red-500 flex items-center gap-1 leading-none relative  after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
                                <FaCaretDown className="whitespace-nowrap" />
                                <span className="whitespace-nowrap">لوازم خانگی و شخصی</span>
                            </a>
                            <ul className="dropdown-content menu bg-base-100  z-1 w-90 p-2 shadow-sm flex mt-3">
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">انواع گجت های جذاب</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">باتری و شارژر</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">اندروید باکس و گیرنده دیجیتال</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">انتن رومیزی</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">مچ بند و ساعت هوشمند</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">محصولات کمیو</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">USBرابط برق و</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">اف ام پلیر</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <a href="/" className="m-1 hover:text-red-500 flex items-center gap-1 leading-none relative  after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
                                <FaCaretDown className="relative top-[1px]" />
                                <span className="whitespace-nowrap">کنسول بازی و لوازم جانبی</span>

                            </a>
                            <ul className="dropdown-content menu bg-base-100  z-1 w-52 p-2 shadow-sm mt-3">
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">کیف</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">کنسول</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">موس و کیبورد</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">دسته بازی</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">هندزفری و هدست</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">شارژر دسته بازی</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <a href="/" className="m-1 hover:text-red-500 flex items-center gap-1 leading-none relative  after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
                                <FaCaretDown className="relative top-[1px]" />
                                <span className="whitespace-nowrap">لوازم شبکه</span>
                            </a>
                            <ul className="dropdown-content menu bg-base-100  z-1 w-52 p-2 shadow-sm mt-3">
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">مودم-روتر</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">هاب شبکه</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">مودم همراه</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">لوازم جانبی</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <a href="/" className="m-1 hover:text-red-500 flex items-center gap-1 leading-none relative  after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
                                <FaCaretDown className="relative top-[1px]" />
                                <span className="whitespace-nowrap">لوازم تولید محتوا</span>
                            </a>
                            <ul className="dropdown-content menu bg-base-100  z-1 w-52 p-2 shadow-sm mt-3">
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">میکروفون </a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">رینگ لایت و پایه</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover relative">
                            <a href="/" className="m-1 hover:text-red-500 flex items-center gap-1 leading-none relative  after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
                                <FaCaretDown className="relative top-[1px]" />
                                <span className="whitespace-nowrap">کابل-مبدل-رابط</span>
                            </a>
                            <ul className="dropdown-content menu bg-base-100  z-1 w-52 p-2 shadow-sm mt-3 dropdown-hover">
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">HDMI کابل</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">کابل پرینتر</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">کابل هارد اکسترنال</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">انواع رابط و تبدیل</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">AUX کابل</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">کابل 2 به 1 صدا</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">کابل اپتیکال</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">OTG کابل و فیش</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-center">
                            <a href="/" className="m-1 hover:text-red-500 flex items-center gap-1 leading-none relative  after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full">
                                <FaCaretDown className="relative top-[1px]" />
                                <span className="whitespace-nowrap">لوازم جانبی کامپیوتر و موبایل</span>
                            </a>
                            <ul className="dropdown-content menu bg-base-100 z-1 w-60 p-2 shadow-sm mt-3">
                                <li><a className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">ماوس و کیبورد پدموس</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">اسپیکر</a></li>
                                <li className="dropdown dropdown-hover block w-full hover:bg-gray-300 text-right">
                                    <a className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">تجهیزات ذخیره سازی</a>
                                    <ul className="dropdown-content menu bg-base-100 z-[2] w-48 gap-4 shadow-sm mr-54 ml-1">
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">فلش مموری</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کارت حافظه</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">هارد اکسترنال</li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">هولدر و نگهدارنده</a></li>
                                <li className="dropdown dropdown-hover"><a className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ</a>
                                    <ul className="dropdown-content menu bg-base-100  z-[2] w-48 gap-4 shadow-sm mr-54 top-0 ml-1">
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ میکرو یو اس بی</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ تایپ سی</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ لایتینگ</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ دو سر تایپ سی</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ تایپ سی به لایتینگ</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ سه کاره</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">کابل شارژ سامسونگ</li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-hover">
                                    <a className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">آداپتور و شارژر</a>
                                    <ul className="dropdown-content menu bg-base-100 z-[2] w-48 gap-4 shadow-sm top-0 mr-54">
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">شارژر</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">شارژر وایرلس</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">شارژر رومیزی</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">شارژر فندکی</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">شارژر سامسونگ</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">شارژر آیفون</li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-hover">
                                    <a className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">هدزفری و هدست،میکروفون</a>
                                    <ul className="dropdown-content menu bg-base-100  z-[2] w-48 gap-4 shadow-sm mr-54 top-0 ml-1">
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">میکروفون</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">هدزفری سیم دار</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">هدست سیم دار</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">هدفون بلوتوث</li>
                                        <li className="block w-full hover:bg-gray-300 hover:text-blue-700 text-right">هندزفری بلوتوث دو گوش</li>
                                    </ul>
                                </li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">پاوربانک و جامپ استارتر</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">دسته بازی و خنک کننده موبایل</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">انواع تبدیل برق</a></li>
                                <li><a className="block w-full hover:bg-gray-300 hover:rounded-none hover:text-blue-700 text-right">کابل و دانگل انتقال تصویر</a></li>
                            </ul>
                        </div>
                        <div >
                            <a href="/" className="m-1 hover:text-rose-500 relative  after:absolute after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:after:w-full after:bottom-[-7px]">خانه</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;