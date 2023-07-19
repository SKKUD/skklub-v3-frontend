import styled from "@emotion/styled";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import SectionTitle from "../Common/SectionTitle";
import NoticeCard from "./NoticeCard";
import MoreBtn from "./MoreBtn";
import NoticeDate from "./NoticeDate";
import NoticeTitle from "./NoticeTitle";
import NoticeWriter from "./NoticeWriter";
import SectionDesc from "../Common/SectionDesc";

const NoticeWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10rem;
`;

const NoticeHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* @media (max-width: 1400px) {
    width: 100%;
  } */
`;

const CarouselContainer = styled.div`
  height: 346px;
  width: 100%;
  background-color: transparent;
  margin: 0 auto;
  margin-top: 1rem;
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

export default function NoticeSection() {
  const matches_1400 = useMediaQuery("(max-width:1400px)");
  const matches_950 = useMediaQuery("(max-width:950px)");
  return (
    <NoticeWrapper>
      {/* <NoticeHeader> */}
      <SectionTitle>공지사항</SectionTitle>
      {/* <MoreBtn>MORE</MoreBtn> */}
      <SectionDesc>
        성균관대학교 동아리연합회에서 공지사항을 알려드립니다! <br />
        동아리와 학교에 관한 새로운 소식들을 들어보세요!
      </SectionDesc>
      {/* </NoticeHeader> */}
      <CarouselContainer>
        <Carousel
          {...DefaultSettingsT}
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
          fullHeightHover={false}
        >
          <CardRow>
            <NoticeCard imageUrl="/assets/images/one.png">
              <NoticeDate>JAN 9, 2021</NoticeDate>
              <NoticeTitle>하반기 수선관 운동장 예약어쩌구</NoticeTitle>
            </NoticeCard>
            <NoticeCard imageUrl="/assets/images/two.png">
              <NoticeDate>JAN 9, 2021</NoticeDate>
              <NoticeTitle>
                [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
              </NoticeTitle>
              <NoticeWriter>스꾸모터</NoticeWriter>
            </NoticeCard>
            {!matches_950 && (
              <NoticeCard imageUrl="/assets/images/three.png">
                <NoticeDate>JAN 9, 2021</NoticeDate>
                <NoticeTitle>[스포츠] 성균관배 골프대회 개최안내</NoticeTitle>
                <NoticeWriter>성골퍼</NoticeWriter>
              </NoticeCard>
            )}
            {!matches_1400 && (
              <NoticeCard imageUrl="/assets/images/four.png">
                <NoticeDate>JAN 9, 2021</NoticeDate>
                <NoticeTitle>[밴드] 제 22회 초청공연</NoticeTitle>
                <NoticeWriter>못갖춘 마디</NoticeWriter>
              </NoticeCard>
            )}
          </CardRow>
          <CardRow>
            <NoticeCard imageUrl="/assets/images/one.png">
              <NoticeDate>JAN 9, 2021</NoticeDate>
              <NoticeTitle>하반기 수선관 운동장 예약어쩌구</NoticeTitle>
            </NoticeCard>
            <NoticeCard imageUrl="/assets/images/two.png">
              <NoticeDate>JAN 9, 2021</NoticeDate>
              <NoticeTitle>
                [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
              </NoticeTitle>
              <NoticeWriter>스꾸모터</NoticeWriter>
            </NoticeCard>
            {!matches_950 && (
              <NoticeCard imageUrl="/assets/images/three.png">
                <NoticeDate>JAN 9, 2021</NoticeDate>
                <NoticeTitle>[스포츠] 성균관배 골프대회 개최안내</NoticeTitle>
                <NoticeWriter>성골퍼</NoticeWriter>
              </NoticeCard>
            )}
            {!matches_1400 && (
              <NoticeCard imageUrl="/assets/images/four.png">
                <NoticeDate>JAN 9, 2021</NoticeDate>
                <NoticeTitle>[밴드] 제 22회 초청공연</NoticeTitle>
                <NoticeWriter>못갖춘 마디</NoticeWriter>
              </NoticeCard>
            )}
          </CardRow>
          <CardRow>
            <NoticeCard imageUrl="/assets/images/one.png">
              <NoticeDate>JAN 9, 2021</NoticeDate>
              <NoticeTitle>하반기 수선관 운동장 예약어쩌구</NoticeTitle>
            </NoticeCard>
            <NoticeCard imageUrl="/assets/images/two.png">
              <NoticeDate>JAN 9, 2021</NoticeDate>
              <NoticeTitle>
                [스포츠] 산악 바이크 취미로 타실 분들 모집합니다.
              </NoticeTitle>
              <NoticeWriter>스꾸모터</NoticeWriter>
            </NoticeCard>
            {!matches_950 && (
              <NoticeCard imageUrl="/assets/images/three.png">
                <NoticeDate>JAN 9, 2021</NoticeDate>
                <NoticeTitle>[스포츠] 성균관배 골프대회 개최안내</NoticeTitle>
                <NoticeWriter>성골퍼</NoticeWriter>
              </NoticeCard>
            )}
            {!matches_1400 && (
              <NoticeCard imageUrl="/assets/images/four.png">
                <NoticeDate>JAN 9, 2021</NoticeDate>
                <NoticeTitle>[밴드] 제 22회 초청공연</NoticeTitle>
                <NoticeWriter>못갖춘 마디</NoticeWriter>
              </NoticeCard>
            )}
          </CardRow>
        </Carousel>
      </CarouselContainer>
    </NoticeWrapper>
  );
}
