import { Outlet } from "react-router-dom";
import Navbar from "../commonSection/Navbar/Navbar";
import Footer from "../commonSection/Footer/Footer";


const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           
           
        </div>
    );
};

export default Root;