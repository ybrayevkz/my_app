import React from "react";
import {SidebarContainer} from "./SidebarElements";
import {Icon} from "./SidebarElements";
import {CloseIcon} from "./SidebarElements";
import {SidebarWrapper} from "./SidebarElements";
import {SidebarLink} from "./SidebarElements";
import {SidebarMenu} from "./SidebarElements";
import {SideBtnWrap} from "./SidebarElements";
import {SidebarRoute} from "./SidebarElements";

export const Sidebar = ({ toggle, isOpen }) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}