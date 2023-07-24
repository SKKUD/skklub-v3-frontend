import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionDivider, SectionTitle } from "./common";
import { useMediaQuery } from "@mui/material";

const DetailContent = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  white-space: pre-line;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
`;

export default function ActivitySection() {
  const match760 = useMediaQuery("(max-width:760px)");
  return (
    <SectionWrapper
      style={{
        gridColumnStart: match760 ? 1 : 2,
        gridColumnEnd: 4,
        flex: 1,
        height: match760 ? "auto" : "443px",
      }}
    >
      <SectionTitle>활동 내용</SectionTitle>

      <DetailContent>
        {`3월 - 새내기배움터 및 입학식 공연 
            5월 - 23기 5월 정기공연 
            6월 -24기 모집마감 7월 - 방학 중 연습 시작(공식 활동) 
            9월 - 23, 24기 9월정기공연`}
      </DetailContent>
    </SectionWrapper>
  );
}
