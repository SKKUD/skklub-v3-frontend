import styled from "@emotion/styled";

import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import RecommendSection from "../../components/main/Recommend/RecommendSection";
import NoticeSection from "../../components/main/Notice/NoticeSection";
import BorrowSection from "../../components/main/Borrow/BorrowSection";

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
  /* height: 1440px; */
  padding: 0 1rem;
  margin: 0 auto;
  padding-bottom: 14rem;
  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }
  /* background-color: grey; */
`;

const SmallRecommendationContent = styled.div`
  width: 100%;
  height: 500px;

  margin-top: 4rem;
  @media (max-width: 425px) {
    height: 278px;
  }
`;

const SmallContentContainer = styled.div`
  background-color: #303030;
  width: 100%;
  height: 400px;
  margin-top: 1rem;
  padding: 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    height: 242px;
  }
`;

const SmallHashTag = styled.div`
  padding: 1px 5px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #303030;
  border-radius: 100px;
  border: 1px solid white;
  line-height: 151.5%;
`;

const SmallCircleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  margin-top: 2rem;
  @media (max-width: 425px) {
    margin-top: 1.5rem;
    gap: 8px;
  }
`;

const SmallClubCircle = styled.div`
  width: 180px;
  height: 180px;
  background-color: #fc7b95;
  border-radius: 90px;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    width: 98px;
    height: 98px;
    border-radius: 50px;
  }
`;

const Phrase = styled.div`
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 1rem;
    line-height: 151.5%;
  }
`;

const IntroTitle = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 150%;
  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 1rem;
    line-height: 151.5%;
  }
`;
const IntroDetail = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 151.5%;
  }
`;
const HashTagContainer = styled.div`
  display: flex;
  /* width: 80%; */
  gap: 0.75rem;
  margin-top: 15px;
`;

const SmallNoticeContent = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5.2rem;
`;

const SmallPhrase = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
`;
const SmallMoreBtn = styled.div`
  background-color: #4e5353;
  width: 73px;
  height: 25px;
  font-weight: 400;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 40px;
  color: white;
`;
const SmallCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SmallCard = styled.div`
  width: 163px;
  height: 231px;

  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.imageUrl});
  border-radius: 1rem;
  box-shadow: inset 0 1em 40px rgba(0, 0, 0, 0.5),
    inset 0 -1em 40px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  align-items: start;
`;

export const useCustomMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Seoul() {
  // const matches_950 = useCustomMediaQuery(950);

  const matches_768 = useMediaQuery("(max-width:768px)");
  const matches_680 = useMediaQuery("(max-width:680px)");
  const matches_560 = useMediaQuery("(max-width:560px)");
  return (
    <>
      <TempContainer>오하은 화이팅</TempContainer>
      <PromotionBanner>동아리 홍보배너</PromotionBanner>
      <ContentContainer>
        {matches_768 ? (
          <SmallRecommendationContent>
            <Phrase>오늘의 추천동아리</Phrase>
            <SmallContentContainer>
              <div>
                <IntroTitle>인성품과 보람 동시에 잡기</IntroTitle>
                <IntroDetail style={{ color: "#9B9B9B" }}>
                  "뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"
                </IntroDetail>
                <HashTagContainer>
                  <SmallHashTag>#대학생활</SmallHashTag>
                  <SmallHashTag>#봉사</SmallHashTag>
                  <SmallHashTag>#친구</SmallHashTag>
                  <SmallHashTag>#사회공헌</SmallHashTag>
                </HashTagContainer>
                <SmallCircleContainer>
                  <SmallClubCircle>성균 민속 연구반 탈</SmallClubCircle>
                  <SmallClubCircle>성균 민속 연구반 탈</SmallClubCircle>
                  <SmallClubCircle>성균 민속 연구반 탈</SmallClubCircle>
                </SmallCircleContainer>
              </div>
            </SmallContentContainer>
          </SmallRecommendationContent>
        ) : (
          <RecommendSection />
        )}

        {matches_680 ? (
          <SmallNoticeContent>
            <SmallPhrase>공지사항</SmallPhrase>
            <SmallMoreBtn>More</SmallMoreBtn>
            <SmallCardContainer>
              <SmallCard imageUrl="/assets/images/one.png"></SmallCard>
              <SmallCard imageUrl="/assets/images/one.png"></SmallCard>
              {!matches_560 && (
                <SmallCard imageUrl="/assets/images/one.png"></SmallCard>
              )}
            </SmallCardContainer>
          </SmallNoticeContent>
        ) : (
          <NoticeSection />
        )}
        <BorrowSection />
      </ContentContainer>
    </>
  );
}
