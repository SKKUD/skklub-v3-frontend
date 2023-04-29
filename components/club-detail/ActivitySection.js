import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";

const ClubDetailCardTitle = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 107.5%;
  margin-bottom: 0.5rem;
`;

const ClubDetailCardHr = styled.hr`
  border: 0px;
  border-top: 1px solid #737d81;
`;

const DetailContent = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  font-weight: 300;
  font-size: 1rem;
  line-height: 130%;
  white-space: pre-line;
`;

export default function ActivitySection() {
  return (
    <SectionWrapper
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 4,
      }}
    >
      <ClubDetailCardTitle>Activity</ClubDetailCardTitle>
      <ClubDetailCardHr />
      <DetailContent>
        {`3월 - 새내기배움터 및 입학식 공연 
            5월 - 23기 5월 정기공연 
            6월 -24기 모집마감 7월 - 방학 중 연습 시작(공식 활동) 
            9월 - 23, 24기 9월정기공연`}
      </DetailContent>
    </SectionWrapper>
  );
}
