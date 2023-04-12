import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/core";
import { EffectCoverflow, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import { ClubCarouselInfo } from "../../utils/ClubCarouselInfo";

export default function ClubCarousel() {
  return (
    <ClubCarouselContainer>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1.9}
        loop={true}
        autoHeight={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides
        spaceBetween={20}
        // initialSlide={1}
        centerInsufficientSlides={false}
        coverflowEffect={{
          rotate: 0, // 회전각도
          stretch: 0,
          depth: 250, // 깊이감도
          modifier: 3, //
          slideShadows: true, //선택한 부분 밝게 나머지는 그늘지게
        }}
        navigation={true} // 네비게이션 버튼
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]} // 모듈추가
        className="mySwiper"
      >
        {ClubCarouselInfo.map((info) => (
          <SwiperSlide>
            <ClubCarouselCard
              name={info.name}
              content={info.content}
              img={info.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ClubCarouselContainer>
  );
}

const ClubCarouselContainer = styled.div`
  margin-top: 200px;
  width: 50%;
`;

const CardWrap = styled.div`
  width: 100%;
  height: 70vh;
  margin: 0 auto;
`;

const GifImg = styled.img`
  width: 46vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
const StyledCard = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  border-radius: 20px;
  background-color: #303030;
  text-align: center;
  margin: 0 auto;
`;
const ContentWrap = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 80px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 2rem;
`;
const Content = styled.div`
  font-family: Pretendard;
  margin-top: 10px;
  text-align: left;
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
