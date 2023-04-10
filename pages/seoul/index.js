import styled from "@emotion/styled";

import Head from "next/head";
import Image from "next/image";

// const CLUB_RECCOMANDATION_DUMMY_DATA = [{}]

const TempContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px); //모바일 적용해야함
  background-color: grey;
  text-align: center;
  line-height: 50vh;
  font-weight: 900;
`;

const PromotionBanner = styled.div`
  width: 100vw;
  height: 160px;
  background-color: #50cfb1;
  color: #ffe195;
  font-size: 4rem;
  font-weight: 500;
  line-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 1440px;
  max-width: 1120px;
  margin: 0 auto;
  background-color: grey;
`;

const RecommendationContent = styled.div`
  width: 100%;
  margin-top: 120px;
`;

const Phrase = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const CircleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 17px;
  margin-top: 24px;
`;

const IntroCircle = styled.div`
  height: 160px;
  flex: 1;
  background-color: #fc7b95;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
`;

const IntroTitle = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 150%;
`;
const IntroDetail = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;
`;
const HashTagContainer = styled.div`
  display: flex;
  width: 80%;
  gap: 0.75rem;
  margin-top: 15px;
`;
const HashTag = styled.div`
  padding: 3px 15px;
  height: 30px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #303030;
  border-radius: 100px;
`;

const ClubCircle = styled.div`
  width: 160px;
  height: 160px;
  background-color: #50cfb1;
  border-radius: 80px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubTitle = styled.div`
  width: 135px;
  height: 93px;
  text-align: center;
  font-weight: 500;
`;

const NoticeContent = styled.div``;

const BorrowContent = styled.div``;

export default function Seoul() {
  return (
    <>
      <TempContainer>오하은 화이팅</TempContainer>
      <PromotionBanner>동아리 홍보배너</PromotionBanner>
      <ContentContainer>
        <RecommendationContent>
          <Phrase>오늘의 추천동아리</Phrase>
          <CircleContainer>
            <IntroCircle>
              <IntroTitle>인성품과 보람 동시에 잡기</IntroTitle>
              <IntroDetail>
                "뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"
              </IntroDetail>
              <HashTagContainer>
                <HashTag>#대학생활</HashTag>
                <HashTag>#봉사</HashTag>
                <HashTag>#친구</HashTag>
                <HashTag>#사회공헌</HashTag>
              </HashTagContainer>
            </IntroCircle>
            <ClubCircle>
              <ClubTitle>성균 민속 연구반 탈</ClubTitle>
            </ClubCircle>
            <ClubCircle>
              <ClubTitle>성균 민속 연구반 탈</ClubTitle>
            </ClubCircle>
            <ClubCircle>
              <ClubTitle>성균 민속 연구반 탈</ClubTitle>
            </ClubCircle>
          </CircleContainer>
        </RecommendationContent>
      </ContentContainer>
    </>
  );
}
