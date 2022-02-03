import styled from "styled-components";

export const AuthorsContainer = styled.div`
  display: flex;  
  height: 100vh;
`

export const AuthorsContainerLeft = styled.div`
  flex: 0.5;  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101522;
`

export const AuthorsContainerRight = styled.div`
  flex: 0.5;
  margin-top: 80px;
  overflow: hidden;
`

export const LeftWrapper = styled.div`
  padding: 50px;    
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LeftWrapperH2 = styled.h2`
  font-size: 30px;
  font-weight: 300;
  color: #fff;
`

export const LeftWrapperH1 = styled.h1`
  font-size: 60px;  
  color: #fff;
`

export const LeftTitle = styled.div`
  height: 50px;
  overflow: hidden;
`

export const LeftTitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;
  
  @keyframes move{
    25%{
      transform: translateY(-50px);
    }
    50%{
      transform: translateY(-100px);
    }
    75%{
      transform: translateY(-150px);
    }
    100%{
      transform: translateY(-200px);
    }
  }
`



export const LeftTitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #01BF71;
  display: flex;
  align-items: center;
`

export const LeftDescription = styled.p`
  color: #fff;  
`

export const AuthorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AuthorsAboutContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

export const AboutContainerLeft = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`

export const AboutContainerRight = styled.div`
  flex: 1;  
`

export const AboutLeftCard = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  
`

export const AboutLeftCardBg = styled.div`
  position: absolute;
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  top: 50px;
  left: 50px;
  background-color: #101522;
`

export const AboutCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AboutRightTitle = styled.h1`
  font-weight: 400;    
`

export const AboutRightSub = styled.p`
  margin: 20px 0;  
`

export const AboutRightDescription = styled.p`
  font-weight: 300;  
`

export const AboutRightAward = styled.div`
  margin-top: 50px;  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AboutRightAwardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`

export const AboutAwardTexts = styled.div`
  width: 70%;
`

export const AwardTitle = styled.h4`
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
`

export const AwardDescription = styled.p`
    
`

export const ContactsContainer = styled.div`
  height: 100vh;
  position: relative;
`

export const ContactsContainerBg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #01BF71;
  position: absolute;
  
`

export const ContactsContainerWrapper = styled.div`
  padding: 50px;
  display: flex;
`

export const ContactsWrapperLeft = styled.div`
  flex: 1;  
`

export const ContactsWrapperRight = styled.div`
  flex: 1;
`

export const ContactsTitle = styled.h1`
  font-size: 50px;
  width: 80%;
`

export const ContactsInfo = styled.div`
    
`
export const ContactsInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  font-weight: 300;
  width: 70%;
`

export const ContactsItemImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`