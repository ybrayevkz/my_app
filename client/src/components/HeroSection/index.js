import React, {useState} from "react";
import Video from "../../videos/video.mp4"
import {HeroContainer} from "./HeroElements";
import {HeroBg} from "./HeroElements";
import {VideoBg} from "./HeroElements";
import {HeroContent} from "./HeroElements";
import {HeroH1} from "./HeroElements";
import {HeroP} from "./HeroElements";
import {HeroBtnWrapper} from "./HeroElements";
import {ArrowRight} from "./HeroElements";
import {ArrowForward} from "./HeroElements";
import {Button} from "../Buttons/ButtonElement";



export const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Learn WEB-Technology with ybrayevweb.</HeroH1>
                <HeroP>Sign up for a new account and choose your course to learn absolutely free.</HeroP>
                <HeroBtnWrapper>
                    <Button to = "signup" onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}