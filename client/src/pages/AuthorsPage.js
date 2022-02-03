import React, {useState} from "react";
import {Sidebar} from "../components/Sidebar";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import {AuthorSection} from "../components/AuthorSection";

export const AuthorsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <AuthorSection />
            <Footer />
        </>
    )
}