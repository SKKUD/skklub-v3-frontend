import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import Phrase from "../Common/Phrase";
import NoticeCard from "./NoticeCard";

const MobileNoticeWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5.2rem;
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
  margin-top: 1rem;
`;

export default function MobileNoticeSection() {
  const matches_560 = useMediaQuery("(max-width:560px)");
  return (
    <MobileNoticeWrapper>
      <Phrase>공지사항</Phrase>
      <SmallMoreBtn>More</SmallMoreBtn>
      <SmallCardContainer>
        <NoticeCard imageUrl="/assets/images/one.png"></NoticeCard>
        <NoticeCard imageUrl="/assets/images/one.png"></NoticeCard>
        {!matches_560 && (
          <NoticeCard imageUrl="/assets/images/one.png"></NoticeCard>
        )}
      </SmallCardContainer>
    </MobileNoticeWrapper>
  );
}
