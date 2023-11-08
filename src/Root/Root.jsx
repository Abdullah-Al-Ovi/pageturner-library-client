import { Outlet } from "react-router-dom";
import Navbar from "../commonSection/Navbar/Navbar";
import Footer from "../commonSection/Footer/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext()

const Root = () => {
    const [isLight,setIsLight]=useState(true)
    return (
        <div>
           <ThemeContext.Provider value={{isLight,setIsLight}}>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           
           </ThemeContext.Provider>
           
        </div>
    );
};

export default Root;