import { ThemeContext } from "../../Root/Root";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Faq from "./Faq/Faq";
import '../../Components/CSS/dark.css'
import { useContext } from "react";
import DownloadApp from "./DownloadApp/DownloadApp";

const Home = () => {
    const {isLight} = useContext(ThemeContext)
    return (
        <div className={`${!isLight && 'darkcss'}`}>
            <Banner></Banner>
            <Categories></Categories>
            <Faq></Faq>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;