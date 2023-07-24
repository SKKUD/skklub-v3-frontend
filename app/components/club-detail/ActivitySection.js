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

export default function ActivitySection({ clubData }) {
  const match760 = useMediaQuery("(max-width:760px)");
  return (
    <SectionWrapper
      style={{
        gridColumnStart: match760 ? 1 : 2,
        gridColumnEnd: 4,
        flex: 1,
        height: match760 ? "auto" : "443px",
        overflowX: "scroll",
      }}
    >
      <SectionTitle>활동 내용</SectionTitle>

      <DetailContent>{clubData.activityDescription}</DetailContent>
    </SectionWrapper>
  );
}
