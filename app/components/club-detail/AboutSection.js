import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { useMediaQuery } from "@mui/material";
import { SectionDivider, SectionTitle } from "./common";

const AboutContent = styled.div`
  min-height: 226px;
  word-break: keep-all;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  height: auto;
  white-space: pre-line;
`;

export default function AboutSection({ clubData }) {
  return (
    <SectionWrapper>
      <SectionTitle>동아리 설명</SectionTitle>
      <AboutContent>{clubData.clubDescription}</AboutContent>
      {/* <ClubPageNaviagateBtn>동아리 페이지</ClubPageNaviagateBtn> */}
    </SectionWrapper>
  );
}
