import React,{useState} from "react";
import {SidebarHome} from "../components/SidebarHome";
import {Navbar, NavbarHome} from "../components/NavbarHome";
import {HeroSection} from "../components/HeroSection";
import {InfoSection} from "../components/InfoSection";
import {homeObjOne} from "../components/InfoSection/Data";
import {homeObjTwo} from "../components/InfoSection/Data";
import {homeObjThree} from "../components/InfoSection/Data";
import {Services} from "../components/Services";
import {Footer} from "../components/Footer";

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <SidebarHome isOpen={isOpen} toggle={toggle}/>
            <NavbarHome toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}