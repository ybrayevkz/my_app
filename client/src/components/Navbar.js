import React from "react";
export const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo right"><img src="../images/ybrayevweb.png" alt="Logo of YbrayevWEB" /></a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}