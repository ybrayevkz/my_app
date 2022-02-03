import React from "react";
import {FooterContainer} from "./FooterElements";
import {FooterLinksContainer} from "./FooterElements";
import {FooterLink} from "./FooterElements";
import {FooterWrap} from "./FooterElements";
import {FooterLinksWrapper} from "./FooterElements";
import {FooterLinkItems} from "./FooterElements";
import {FooterLinkTitle} from "./FooterElements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaVk, FaYoutube} from "react-icons/fa";
import {SocialIcons} from "./FooterElements";
import {SocialMediaWrap} from "./FooterElements";
import {SocialLogo} from "./FooterElements";
import {SocialMedia} from "./FooterElements";
import {SocialIconLink} from "./FooterElements";
import {WebsiteRights} from "./FooterElements";
import {animateScroll as scroll} from "react-scroll";
import {FooterLogoIcon} from "./FooterElements";
import logo from "../../images/my_final_logo.png"


export const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink to='/authors'>Автор проекта</FooterLink>
                            <FooterLink to='/'>Конфиденциальность и условия</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Для связи с нами</FooterLinkTitle>
                            <FooterLink to='/'>Наши контакты</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>VK</FooterLink>
                            <FooterLink to='/'>Telegram</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <FooterLogoIcon src={logo} alt='logo'/>ybrayevweb.</SocialLogo>
                        <WebsiteRights>ybrayevweb. © {new Date().getFullYear()} Все права защищены.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                                <FaVk />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}