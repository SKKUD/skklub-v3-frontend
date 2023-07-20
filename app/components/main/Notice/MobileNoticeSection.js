import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import SectionTitle from "../Common/SectionTitle";
import NoticeCard from "./NoticeCard";
import MoreBtn from "./MoreBtn";
import NoticeDate from "./NoticeDate";
import NoticeTitle from "./NoticeTitle";
import NoticeWriter from "./NoticeWriter";

const MobileNoticeWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5.2rem;
`;

const SmallCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

export default function MobileNoticeSection() {
  const matches_560 = useMediaQuery("(max-width:560px)");
  return (
    <MobileNoticeWrapper>
      <SectionTitle>공지사항</SectionTitle>
      <MoreBtn>More</MoreBtn>
      <SmallCardContainer>
        <NoticeCard imageUrl="/assets/images/one.png">
          <NoticeDate>Jan 9, 2021</NoticeDate>
          <NoticeTitle>[밴드] 제 22회 초청공연</NoticeTitle>
          <NoticeWriter>못갗춘마디</NoticeWriter>
        </NoticeCard>
        <NoticeCard imageUrl="/assets/images/one.png">
          <NoticeDate>Jan 9, 2021</NoticeDate>
          <NoticeTitle>[밴드] 제 22회 초청공연</NoticeTitle>
          <NoticeWriter>못갗춘마디</NoticeWriter>
        </NoticeCard>
        {!matches_560 && (
          <NoticeCard imageUrl="/assets/images/one.png"></NoticeCard>
        )}
      </SmallCardContainer>
    </MobileNoticeWrapper>
  );
}
