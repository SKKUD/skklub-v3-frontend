"use client";
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/core";
import { useMediaQuery } from "@mui/material";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import { ClubCarouselInfo } from "../../../utils/ClubCarouselInfo";
import { useSetRecoilState } from "recoil";
import { categoryState } from "@/utils/atoms";
import Image from "next/image";
import useThemeModeDetect from "@/hooks/useThemeModeDetect";

const CarouselWrapperWithNavBtn = styled.div`
  width: auto;
  display: flex;
  align-items: center;
`;

const StyledNavBtn = styled(Image)`
  margin: 40px;
  cursor: pointer;
`;
const ClubCarouselContainer = styled.div`
  width: ${(props) => props.width || "50%"};
`;

const CardWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  white-space: pre-line;

  @media (max-width: 750px) {
    max-width: 400px;
  }
`;

const GifImg = styled.img`
  width: calc(100% + 200px);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  @media (max-width: 750px) {
    width: calc(100% + 100px);
  }

  @media (min-width: 1024px) {
    top: -10px;
  }
`;

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  min-height: 550px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.info.main};
  text-align: center;
  margin: 15px auto 50px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.25);

  @media (max-width: 750px) {
    height: 500px;
    min-height: 500px;
    box-shadow: 1px -1px 3px 1px rgba(176, 176, 176, 0.75) inset;
  }
`;

const ContentWrap = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 50px;
`;

const Name = styled.div`
  font-family: GmarketSansBold;
  font-size: 30px;
  font-weight: 500;
`;
const Content = styled.div`
  font-family: Pretendard;
  margin-top: 30px;
  text-align: left;
`;

const InfoText = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  word-break: keep-all;
  font-size: 18px;
  font-family: Pretendard;
`;

function ClubCarouselCard({ name, content, img }) {
  return (
    <CardWrap>
      <StyledCard>
        <GifImg src={`/assets/animations/${img}`} />
        <ContentWrap>
          <Name>{name}</Name>
          <Content>{content}</Content>
        </ContentWrap>
      </StyledCard>
    </CardWrap>
  );
}

export default function ClubCarousel() {
  const match760 = useMediaQuery("(max-width:760px)");
  const match1000 = useMediaQuery("(max-width:1000px)");
  const match1200 = useMediaQuery("(max-width:1200px)");
  const router = useRouter();
  const pathname = usePathname();
  const setCategory = useSetRecoilState(categoryState);
  const IsDarkMode = useThemeModeDetect();

  const handleClickCard = (clickedCategory) => {
    setCategory(clickedCategory);
    const newPath = `${pathname}/central-clubs`;
    router.push(newPath);
  };

  const width = match760
    ? "90%"
    : match1000
    ? "900px"
    : match1200
    ? "1000px"
    : "1212px";
  return (
    <ClubCarouselContainer width={width}>
      {match760 ? (
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={1}
          loop={true}
          autoHeight={true}
          grabCursor={true}
          centeredSlides
          pagination={{ clickable: true }}
          modules={[Pagination]} // 모듈추가
          className="mySwiper"
        >
          {ClubCarouselInfo.map((info) => (
            <SwiperSlide key={info.name}>
              <ClubCarouselCard
                name={info.name}
                content={info.content}
                img={info.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <CarouselWrapperWithNavBtn>
          <StyledNavBtn
            className="prev"
            src={`/assets/images/${IsDarkMode ? "dark" : "light"}_prev.png`}
            width={26}
            height={50}
            alt="prev button"
          />
          <Swiper
            style={{
              "--swiper-pagination-color": "#fff",
            }}
            slidesPerView={2.5}
            loop={true}
            autoHeight={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides
            spaceBetween={0}
            centerInsufficientSlides={false}
            coverflowEffect={{
              rotate: 0, // 회전각도
              stretch: 0,
              depth: 300, // 깊이감도
              modifier: 1, //
              slideShadows: false, //선택한 부분 밝게 나머지는 그늘지게
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }} // 네비게이션 버튼
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Navigation, Pagination]} // 모듈추가
            className="mySwiper"
          >
            {ClubCarouselInfo.map((info) => (
              <SwiperSlide
                key={info.name}
                onClick={() => handleClickCard(info.name)}
              >
                <ClubCarouselCard
                  name={info.name}
                  content={info.content}
                  img={info.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <StyledNavBtn
            className="next"
            src={`/assets/images/${IsDarkMode ? "dark" : "light"}_next.png`}
            width={26}
            height={50}
            alt="next button"
          />
        </CarouselWrapperWithNavBtn>
      )}
      <InfoText>아래로 스크롤 해서 더 다양한 정보를 확인하세요. </InfoText>
    </ClubCarouselContainer>
  );
}
