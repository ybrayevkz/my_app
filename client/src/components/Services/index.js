import React from "react";
import {ServicesContainer} from "./ServicesElements";
import {ServicesWrapper} from "./ServicesElements";
import {ServicesH1} from "./ServicesElements";
import {ServicesIcon} from "./ServicesElements";
import {ServicesCard} from "./ServicesElements";
import {ServicesH2} from "./ServicesElements";
import {ServicesP} from "./ServicesElements";
import Icon1 from "../../images/svg-01.svg";
import Icon2 from "../../images/svg-03.svg";
import Icon3 from "../../images/svg-05.svg";

export const Services = () => {
    return(
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual offices</ServicesH2>
                        <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card thatreturns 5% cash back.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}