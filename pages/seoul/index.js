import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import ClubCarousel from "../../components/index/ClubCarousel";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

// const CLUB_RECCOMANDATION_DUMMY_DATA = [{}]

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh; //모바일 적용해야함
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromotionBanner = styled.div`
  width: 100%;
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
  padding: 0 1rem;
  margin: 0 auto;
  /* background-color: grey; */
`;

const RecommendationContent = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const SmallRecommendationContent = styled.div`
  width: 100%;
  height: 500px;

  margin-top: 4rem;
  @media (max-width: 375px) {
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
  @media (max-width: 375px) {
    height: 242px;
  }
`;

const SmallHashTag = styled.div`
  padding: 3px 15px;
  height: 30px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #303030;
  border-radius: 100px;
  border: 1px solid white;
`;

const SmallCircleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  margin-top: 2rem;
  @media (max-width: 375px) {
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
  @media (max-width: 375px) {
    width: 98px;
    height: 98px;
    border-radius: 50px;
  }
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
  padding: 0px 30px;
  @media (max-width: 1400px) {
    padding: 0;
  }
`;

const IntroCircle = styled.div`
  height: 153px;
  flex: 1;
  background-color: #fc7b95;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 68px;
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
  /* width: 80%; */
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
  width: 153px;
  height: 153px;
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

const SmallNoticeContent = styled.div`
  width: 100%;
  position: relative;
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

const NoticeContent = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10rem;
  /* width: 1182px;
  @media (max-width: 1400px) {
    width: 910px;
  }
  @media (max-width: 950px) {
    width: 638px;
  } */
`;

const MoreBtn = styled.button`
  background-color: #4e5353;
  width: 104px;
  height: 33px;
  font-weight: 400;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 60px;
  border: none;
  border-radius: 104px;
  color: white;
`;

const CarouselContainer = styled.div`
  height: 346px;
  width: 1182px;
  background-color: transparent;
  margin: 0 auto;
  margin-top: 2rem;
  @media (max-width: 1400px) {
    width: 910px;
  }
  @media (max-width: 950px) {
    width: 638px;
  }
  @media (max-width: 425px) {
    width: 638px;
  }
`;

const DefaultSettingsT = {
  autoPlay: false,
  animation: "slide",
  indicators: false,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: true,
};

const CardRow = styled.div`
  height: 346px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 28px;
`;

const ClubCard = styled.div`
  width: 244px;
  height: 346px;

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
  padding-left: 0.75rem;
  align-items: start;
`;

const CardDate = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  font-weight: 400;
  font-size: 1rem;
  color: white;
`;

//제목이 길경우 짧게 파싱해주어야함
const CardTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  width: 224px;
  margin-bottom: 0.75rem;
`;

const CardClubName = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: white;
  margin-bottom: 17px;
`;

const BorrowContent = styled.div`
  background-color: #50cfb1;
  width: 100%;
  max-width: 1182px;
  height: 160px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4rem;
  padding-right: 4.7rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }
`;

const BorrowPhrase = styled.div`
  font-weight: 500;
  font-size: 4rem;
  line-height: 4rem;
  color: #ffe195;

  @media (max-width: 1100px) {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const ComingSoon = styled.div`
  width: 230px;
  height: 60px;
  background-color: #303030;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 46px;
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
  const matches_1400 = useMediaQuery("(max-width:1400px)");
  const matches_1024 = useMediaQuery("(max-width:1024px)");
  // const matches_950 = useCustomMediaQuery(950);
  const matches_950 = useMediaQuery("(max-width:950px)");
  const matches_768 = useMediaQuery("(max-width:768px)");
  const matches_680 = useMediaQuery("(max-width:680px)");
  const matches_560 = useMediaQuery("(max-width:560px)");
  return (
    <>
      <HomeContainer>
        <ClubCarousel />
      </HomeContainer>
      <PromotionBanner>동아리 홍보배너</PromotionBanner>
      <ContentContainer>
        {matches_768 ? (
          <SmallRecommendationContent>
            <Phrase>오늘의 추천동아리</Phrase>
            <SmallContentContainer>
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
            </SmallContentContainer>
          </SmallRecommendationContent>
        ) : (
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
                  {!matches_950 && <HashTag>#사회공헌</HashTag>}
                </HashTagContainer>
              </IntroCircle>
              <ClubCircle>
                <ClubTitle>성균 민속 연구반 탈</ClubTitle>
              </ClubCircle>
              <ClubCircle>
                <ClubTitle>성균 민속 연구반 탈</ClubTitle>
              </ClubCircle>
              {!matches_1024 && (
                <ClubCircle>
                  <ClubTitle>성균 민속 연구반 탈</ClubTitle>
                </ClubCircle>
              )}
            </CircleContainer>
          </RecommendationContent>
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
          <NoticeContent>
            <Phrase style={{ marginLeft: "60px" }}>공지사항</Phrase>
            <MoreBtn>MORE</MoreBtn>
            <CarouselContainer>
              <Carousel
                {...DefaultSettingsT}
                NextIcon={<ArrowForwardIosIcon />}
                PrevIcon={<ArrowBackIosNewIcon />}
                fullHeightHover={false}
              >
                <CardRow>
                  <ClubCard imageUrl="/assets/images/one.png">
                    <CardDate>JAN 9, 2021</CardDate>
                    <CardTitle>하반기 수선관 운동장 예약어쩌구</CardTitle>
                  </ClubCard>
                  <ClubCard imageUrl="/assets/images/two.png">
                    <CardDate>JAN 9, 2021</CardDate>
                    <CardTitle>
                      [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
                    </CardTitle>
                    <CardClubName>스꾸모터</CardClubName>
                  </ClubCard>
                  {!matches_950 && (
                    <ClubCard imageUrl="/assets/images/three.png">
                      <CardDate>JAN 9, 2021</CardDate>
                      <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                      <CardClubName>성골퍼</CardClubName>
                    </ClubCard>
                  )}
                  {!matches_1400 && (
                    <ClubCard imageUrl="/assets/images/four.png">
                      <CardDate>JAN 9, 2021</CardDate>
                      <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                      <CardClubName>못갖춘 마디</CardClubName>
                    </ClubCard>
                  )}
                </CardRow>
                <CardRow>
                  <ClubCard imageUrl="/assets/images/one.png">
                    <CardDate>JAN 9, 2021</CardDate>
                    <CardTitle>하반기 수선관 운동장 예약어쩌구</CardTitle>
                  </ClubCard>
                  <ClubCard imageUrl="/assets/images/two.png">
                    <CardDate>JAN 9, 2021</CardDate>
                    <CardTitle>
                      [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
                    </CardTitle>
                    <CardClubName>스꾸모터</CardClubName>
                  </ClubCard>
                  {!matches_950 && (
                    <ClubCard imageUrl="/assets/images/three.png">
                      <CardDate>JAN 9, 2021</CardDate>
                      <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                      <CardClubName>성골퍼</CardClubName>
                    </ClubCard>
                  )}
                  {!matches_1400 && (
                    <ClubCard imageUrl="/assets/images/four.png">
                      <CardDate>JAN 9, 2021</CardDate>
                      <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                      <CardClubName>못갖춘 마디</CardClubName>
                    </ClubCard>
                  )}
                </CardRow>
                <CardRow>
                  <ClubCard imageUrl="/assets/images/one.png">
                    <CardDate>JAN 9, 2021</CardDate>
                    <CardTitle>하반기 수선관 운동장 예약어쩌구</CardTitle>
                  </ClubCard>
                  <ClubCard imageUrl="/assets/images/two.png">
                    <CardDate>JAN 9, 2021</CardDate>
                    <CardTitle>
                      [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
                    </CardTitle>
                    <CardClubName>스꾸모터</CardClubName>
                  </ClubCard>
                  {!matches_950 && (
                    <ClubCard imageUrl="/assets/images/three.png">
                      <CardDate>JAN 9, 2021</CardDate>
                      <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                      <CardClubName>성골퍼</CardClubName>
                    </ClubCard>
                  )}
                  {!matches_1400 && (
                    <ClubCard imageUrl="/assets/images/four.png">
                      <CardDate>JAN 9, 2021</CardDate>
                      <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                      <CardClubName>못갖춘 마디</CardClubName>
                    </ClubCard>
                  )}
                </CardRow>
              </Carousel>
            </CarouselContainer>
          </NoticeContent>
        )}
        <BorrowContent>
          <BorrowPhrase>공간대관 필요하세요?</BorrowPhrase>
          <ComingSoon>Coming Soon</ComingSoon>
        </BorrowContent>
      </ContentContainer>
    </>
  );
}
