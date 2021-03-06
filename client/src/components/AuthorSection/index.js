import React from "react";
import author_image from "../../images/AuthorsPage/myimage.png"
import {AuthorsContainer} from "./AuthorsSectionElements";
import {AuthorsContainerLeft} from "./AuthorsSectionElements";
import {AuthorsContainerRight} from "./AuthorsSectionElements";
import {LeftWrapper} from "./AuthorsSectionElements";
import {LeftWrapperH2} from "./AuthorsSectionElements";
import {LeftWrapperH1} from "./AuthorsSectionElements";
import {LeftTitle} from "./AuthorsSectionElements";
import {LeftTitleWrapper} from "./AuthorsSectionElements";
import {LeftTitleItem} from "./AuthorsSectionElements";
import {LeftDescription} from "./AuthorsSectionElements";
import {AuthorImage} from "./AuthorsSectionElements";
import {AuthorsAboutContainer} from "./AuthorsSectionElements";
import {AboutContainerLeft} from "./AuthorsSectionElements";
import {AboutContainerRight} from "./AuthorsSectionElements";
import {AboutLeftCard} from "./AuthorsSectionElements";
import {AboutCardImg} from "./AuthorsSectionElements";
import aboutpage_about_second_image from "../../images/AuthorsPage/about_page_second_img.jpg"
import {AboutLeftCardBg} from "./AuthorsSectionElements";
import {AboutRightDescription} from "./AuthorsSectionElements";
import {AboutRightSub} from "./AuthorsSectionElements";
import {AboutRightTitle} from "./AuthorsSectionElements";
//import {AboutRightAward} from "./AuthorsSectionElements";
//import {AboutRightAwardImage} from "./AuthorsSectionElements";
//import about_award_image from "../../images/AuthorsPage/about_award_image.jpg"
//import {AboutAwardTexts} from "./AuthorsSectionElements";
//import {AwardTitle} from "./AuthorsSectionElements";
//import {AwardDescription} from "./AuthorsSectionElements";
import {ContactsContainer} from "./AuthorsSectionElements";
import {ContactsContainerBg} from "./AuthorsSectionElements";
import {ContactsContainerWrapper} from "./AuthorsSectionElements";
import {ContactsWrapperLeft} from "./AuthorsSectionElements";
import {ContactsWrapperRight} from "./AuthorsSectionElements";
import {ContactsInfo} from "./AuthorsSectionElements";
import {ContactsTitle} from "./AuthorsSectionElements";
import {ContactsInfoItem} from "./AuthorsSectionElements";
import {ContactsItemImg} from "./AuthorsSectionElements";
import contacts_phone from "../../images/ContactsPage/contacts_phone.png"
import contacts_email from "../../images/ContactsPage/contacts_email.png"
import contacts_address from "../../images/ContactsPage/contacts_address.png"

export const AuthorSection = () => {
    return(
        <>
            <AuthorsContainer>
                <AuthorsContainerLeft>
                    <LeftWrapper>
                        <LeftWrapperH2>????????????, ???????? ??????????</LeftWrapperH2>
                        <LeftWrapperH1>?????????? ????????????</LeftWrapperH1>
                        <LeftTitle>
                            <LeftTitleWrapper>
                                <LeftTitleItem>Web-??????????????????????</LeftTitleItem>
                                <LeftTitleItem>?????????????? SU</LeftTitleItem>
                                <LeftTitleItem>??????????????????????????</LeftTitleItem>
                                <LeftTitleItem>???????????????????? ????????????</LeftTitleItem>
                                <LeftTitleItem>????????????</LeftTitleItem>
                            </LeftTitleWrapper>
                        </LeftTitle>
                        <LeftDescription>
                            ?? ?????????????? ?????????????????? Satbayev University ?? ????????????(??????????????????). ?????????? ???? ?????????????????????????? "???????????????????????????? ?????????????? ?? ?????????????????????? ??????????????????????".

                        </LeftDescription>
                    </LeftWrapper>
                </AuthorsContainerLeft>
                <AuthorsContainerRight>
                    <AuthorImage src={author_image} alt="Author's image"/>
                </AuthorsContainerRight>
            </AuthorsContainer>
            <AuthorsAboutContainer>
                <AboutContainerLeft>
                    <AboutLeftCardBg>

                    </AboutLeftCardBg>
                    <AboutLeftCard>
                        <AboutCardImg src={aboutpage_about_second_image} alt="Authors second image" />
                    </AboutLeftCard>
                </AboutContainerLeft>
                <AboutContainerRight>
                    <AboutRightTitle>???????????? ?? ?????????? ???????? ?????????????</AboutRightTitle>
                    <AboutRightSub>
                        ???????? ?????????? ?????????????? - ???????????? ?????????? ?????????????? ?????????????????????? ???? "Web-????????????????????", ?????? ?????? ?????? ?????? ???????????????? ????????????????.

                    </AboutRightSub>
                    <AboutRightDescription>
                        ?????????????????????? ?????? ?????????? ???????????????????? ???????? ?????????????????????????????????????????? ?? ???????????????? ?????????? ?? ?????? ???????????????? ?????? ?????? ?????????? ???? ?????????????????????? ?????????????????????? ????????????.
                        Web-???????????????????? ?????? ?????? ???????? ???????????????? ?????????? ????????????????????????, ?? ?????? ???? ?????????????? ?????? ?????? ???? ???????????????????????? ?????????????? ?????? ?????????????? ?? ???????????? ?????????????? ??????????????????.
                        ???????? ???????????? ???????????????? ???????? ?????? ???????? ?????? ???? ???? ?????????? ?????????????? ???????????? ???????? ??????????????????????????. <br/>

                    </AboutRightDescription>
                    { /*
                    <AboutRightAward>
                        <AboutRightAwardImage src={about_award_image} alt="Authors award"/>
                        <AboutAwardTexts>
                            <AwardTitle>Champions League</AwardTitle>
                            <AwardDescription>
                                This award for Yernur Ybrayev, winner of champions league in 2022 year.
                            </AwardDescription>
                        </AboutAwardTexts>
                    </AboutRightAward> */}

                </AboutContainerRight>
            </AuthorsAboutContainer>
            <ContactsContainer>
                <ContactsContainerBg>

                </ContactsContainerBg>
                <ContactsContainerWrapper>
                    <ContactsWrapperLeft>
                        <ContactsTitle>?? ???????? ?????? ???????????? ????????????????????????????</ContactsTitle>
                        <ContactsInfo>
                            <ContactsInfoItem>
                                <ContactsItemImg src={contacts_phone} alt="Authors's phone"/>+7 (707)-689-12-13
                            </ContactsInfoItem>
                            <ContactsInfoItem>
                                <ContactsItemImg src={contacts_email} alt="Authors's email"/>ybrayev.kz@gmail.com
                            </ContactsInfoItem>
                            <ContactsInfoItem>
                                <ContactsItemImg src={contacts_address} alt="Authors's address"/>Kazakhstan, Almaty, Satbayev 22a
                            </ContactsInfoItem>
                        </ContactsInfo>
                    </ContactsWrapperLeft>
                    <ContactsWrapperRight>

                    </ContactsWrapperRight>
                </ContactsContainerWrapper>
            </ContactsContainer>
        </>
    )
}