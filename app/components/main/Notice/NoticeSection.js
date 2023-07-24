"use client";

import styled from "@emotion/styled";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Common/SectionTitle";
// import NoticeCard from "./NoticeCard";
import MoreBtn from "./MoreBtn";
import NoticeDate from "./NoticeDate";
import NoticeTitle from "./NoticeTitle";
import NoticeWriter from "./NoticeWriter";
import SectionDesc from "../Common/SectionDesc";
import Image from "next/image";
import noticeExample from "@/public/assets/images/notice_example.png";
import { getNoticeThumbnailCard } from "@/utils/fetch";
import { useRouter } from "next/navigation";

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

const NoticeCardsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-top: 1rem;
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

const NoticeDescWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const NoticeCard = styled.div`
  width: 174px;
`;
const NoticeImg = styled(Image)`
  border-radius: 10px;
`;

const NoticeThumbnail = styled.div`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export default function NoticeSection() {
  const router = useRouter();
  const { isLoading, data } = useQuery({
    queryKey: ["notice-thumbnail"],
    queryFn: () => getNoticeThumbnailCard(),
    // onSuccess: (data) => console.log(data),
  });
  const pushToNotices = () => {
    router.push(`/notices`);
  };
  const pushToNotice = (id) => {
    router.push(`/notices/${id}`);
  };
  const matches_1400 = useMediaQuery("(max-width:1400px)");
  const matches_950 = useMediaQuery("(max-width:950px)");
  return (
    <NoticeWrapper>
      <SectionTitle>공지사항</SectionTitle>
      <NoticeDescWrap>
        <SectionDesc>
          성균관대학교 동아리연합회에서 공지사항을 알려드립니다! <br />
          동아리와 학교에 관한 새로운 소식들을 들어보세요!
        </SectionDesc>
        <MoreBtn onClick={pushToNotices}>더보기</MoreBtn>
      </NoticeDescWrap>
      <NoticeCardsContainer>
        {data &&
          data.content.slice(0, 5).map((item) => {
            return (
              <NoticeCard
                onClick={() => pushToNotice(item.noticeId)}
                key={item.noticeId}
              >
                <NoticeImg
                  src={`data:image/png;base64,${item.thumbnail.bytes}`}
                  width={174}
                  height={174}
                  alt="notice thumbnail"
                />
                <NoticeDate>{item.createdAt.substr(0, 10)}</NoticeDate>
                <NoticeTitle>{item.title}</NoticeTitle>
                <NoticeThumbnail>{item.content}</NoticeThumbnail>
              </NoticeCard>
            );
          })}
      </NoticeCardsContainer>
    </NoticeWrapper>
  );
}
