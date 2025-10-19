import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Navbar from "../Navbar/Navbar";
import Slider from "./Slider/Slider";
import Card from "./Card/Card";
import Slider2 from "./Slider2/Slider2";
import Slider3 from "../Slider3/Slider3";
import Text from "./Text/Text";
import Slider4 from "./Slider4/Slider4";
import Slider5 from "./Slider5/Slider5";
import Slider6 from "./Slider6/Slider6";
import AD from "./AD/AD";
import EN from "./EN/EN";
import Footer from "./Footer/Footer";


export const metadata={
    title:"دسترسی",
    description:"صفحه رسمی دسترسی"
}


const App = () => {
    return ( 
        <Provider store={store}>
             <Navbar/>
             <div className="w-[90%] mt-5 mx-auto">
             <Slider/>
             </div>
             <Card/>
             <Slider2/>
            <Slider3/>
            <Text/>
            <Slider4/>
            <Slider5/>
            <Slider6/>
            <AD/>
            <EN/>
            <Footer/>
        </Provider>
     );
}
 
export default App ;