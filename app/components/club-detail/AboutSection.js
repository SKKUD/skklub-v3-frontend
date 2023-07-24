import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { useMediaQuery } from "@mui/material";
import { SectionDivider, SectionTitle } from "./common";

const AboutContent = styled.div`
  height: 226px;
  word-break: keep-all;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
`;

const ClubPageNaviagateBtn = styled.button`
  position: absolute;
  bottom: 24px;
  right: 30px;
  width: 174px;
  height: 51px;
  background-color: #c4cbcd;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 107.5%;
  color: white;
  border: none;
  @media (max-width: 760px) {
    position: relative;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    margin-top: 2rem;
  }
`;

export default function AboutSection({ clubData }) {
  return (
    <SectionWrapper
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 4,
      }}
    >
      <SectionTitle>동아리 정보</SectionTitle>
      <AboutContent>{clubData.clubDescription}</AboutContent>
      {/* <ClubPageNaviagateBtn>동아리 페이지</ClubPageNaviagateBtn> */}
    </SectionWrapper>
  );
}
