import React from "react";
import {ServicesContainer} from "./ServicesElements";
import {ServicesWrapper} from "./ServicesElements";
import {ServicesH1} from "./ServicesElements";
import {ServicesIcon} from "./ServicesElements";
import {ServicesCard} from "./ServicesElements";
import {ServicesH2} from "./ServicesElements";
import {ServicesP} from "./ServicesElements";
import homepage_service_studying from "../../images/HomePage/homepage_service_studying.svg";
import homepage_service_exercises from "../../images/HomePage/homepage_service_exercises.svg";
import homepage_service_exam from "../../images/HomePage/homepage_service_exam.svg";

export const Services = () => {
    return(
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Наши курсы состоят из 3 частей</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={homepage_service_studying} />
                        <ServicesH2>Тренинг</ServicesH2>
                        <ServicesP>Вы будете тренироваться в каждом курсе практикуя ваши знания.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={homepage_service_exercises} />
                        <ServicesH2>Задания</ServicesH2>
                        <ServicesP>При прохождения курса по мимо тренинга буду еще задания для того что бы вы
                            освоили данный курс.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={homepage_service_exam} />
                        <ServicesH2>Экзаменация</ServicesH2>
                        <ServicesP>В конце курса вас будет ждать экзаменация по данному курсу.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}