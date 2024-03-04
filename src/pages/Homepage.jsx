import { Link } from "react-router-dom";
import { useState } from "react";

//Page
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MobileMenu from "../components/MobileMenu";
import Project from "../components/Project";


const Homepage = () => {

    const [mobileMenu, setmobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setmobileMenu(!mobileMenu);
    }

    return(
        <>
            <Navbar handleMobileMenu={handleMobileMenu}/>
            <MobileMenu mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu}/>
            <Hero/>
            <About/>
            <Project/>
        </>
    )
}

export default Homepage;