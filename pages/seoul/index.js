import styled from "@emotion/styled";

import Head from "next/head";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
  max-width: 1300px;
  margin: 0 auto;
  /* background-color: grey; */
`;

const RecommendationContent = styled.div`
  width: 1200px;
  padding: 0px 20px;
  margin: 0 auto;
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
  padding: 0px 30px;
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

const NoticeContent = styled.div`
  margin-top: 10rem;
  position: relative;
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
  right: 120px;
  border: none;
  border-radius: 104px;
  color: white;
`;

const CarouselContainer = styled.div`
  height: 346px;
  width: 1200px;
  background-color: transparent;
  margin: 0 auto;
  margin-top: 2rem;
`;

const DefaultSettingsT = {
  autoPlay: true,
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
  /* background-image: url(${(props) => props.imageUrl}); */
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
  width: 1160px;
  height: 160px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4rem;
  padding-right: 4.7rem;
`;

const BorrowPhrase = styled.div`
  font-weight: 500;
  font-size: 64px;
  line-height: 64px;
  color: #ffe195;
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
        <NoticeContent>
          <Phrase style={{ marginLeft: "90px" }}>공지사항</Phrase>
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
                <ClubCard imageUrl="/assets/images/three.png">
                  <CardDate>JAN 9, 2021</CardDate>
                  <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                  <CardClubName>성골퍼</CardClubName>
                </ClubCard>
                <ClubCard imageUrl="/assets/images/four.png">
                  <CardDate>JAN 9, 2021</CardDate>
                  <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                  <CardClubName>못갖춘 마디</CardClubName>
                </ClubCard>
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
                <ClubCard imageUrl="/assets/images/three.png">
                  <CardDate>JAN 9, 2021</CardDate>
                  <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                  <CardClubName>성골퍼</CardClubName>
                </ClubCard>
                <ClubCard imageUrl="/assets/images/four.png">
                  <CardDate>JAN 9, 2021</CardDate>
                  <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                  <CardClubName>못갖춘 마디</CardClubName>
                </ClubCard>
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
                <ClubCard imageUrl="/assets/images/three.png">
                  <CardDate>JAN 9, 2021</CardDate>
                  <CardTitle>[스포츠] 성균관배 골프대회 개최안내</CardTitle>
                  <CardClubName>성골퍼</CardClubName>
                </ClubCard>
                <ClubCard imageUrl="/assets/images/four.png">
                  <CardDate>JAN 9, 2021</CardDate>
                  <CardTitle>[밴드] 제 22회 초청공연</CardTitle>
                  <CardClubName>못갖춘 마디</CardClubName>
                </ClubCard>
              </CardRow>
            </Carousel>
          </CarouselContainer>
        </NoticeContent>
        <BorrowContent>
          <BorrowPhrase>공간대관 필요하세요?</BorrowPhrase>
          <ComingSoon>Coming Soon</ComingSoon>
        </BorrowContent>
      </ContentContainer>
    </>
  );
}
