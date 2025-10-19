import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const AD = () => {
   const scrollbtn=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
   }
    return ( 
        <div className="w-full bg-gray-300 justify-center items-center mt-10 p-7 ad-container">
            <div className="flex justify-between items-center">
                <div>
                <button onClick={scrollbtn} className="btn border-1 bg-white flex rounded-2xl text-gray-400 hover:text-black"><span className="text-start"><FaChevronUp /></span>برو بالا</button>
                </div>
                <div className="flex text-gray-500">
                    <h1 className="mr-2">تهران-میدان امام خمینی-پاساژ لباف-همکف-پلاک3-فروشگاه بدیع</h1>
                    <CiLocationOn />
                </div>
                <div className="flex text-gray-500">
                   <h3 className="mr-2 font-thin" >شنبه تا چهارشنبه از ساعت10صبح الی ساعت18 پنجشنبه ها از10صبح الی ساعت16</h3> 
                   <FaRegClock />
                </div>
                <div className="flex text-gray-500">
                <h1 className="mr-2" >021-33902646</h1>
                <FaPhone />
                </div>
            </div>
        </div>
     );
}
 
export default AD;