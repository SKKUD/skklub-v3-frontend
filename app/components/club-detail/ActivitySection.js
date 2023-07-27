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
  const match950 = useMediaQuery("(max-width:950px)");
  return (
    <SectionWrapper
      style={{
        gridColumnStart: match950 ? 1 : 2,
        gridColumnEnd: 4,
        flex: 1,
        height: match950 ? "auto" : "443px",
        overflowX: "scroll",
      }}
    >
      <SectionTitle>활동 내용</SectionTitle>

      <DetailContent>{clubData.activityDescription}</DetailContent>
    </SectionWrapper>
  );
}
