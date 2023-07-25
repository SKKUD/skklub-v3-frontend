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
import SectionDesc from "../Common/SectionDesc";
import { getNoticeThumbnailCard } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import NoticeCard from "./NoticeCard";

const NoticeWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10rem;
`;

const NoticeCardsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-top: 1rem;
`;

const NoticeDescWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
          data.content
            .slice(0, 5)
            .map((item) => <NoticeCard key={item.noticeId} item={item} />)}
      </NoticeCardsContainer>
    </NoticeWrapper>
  );
}
