import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import Phrase from "../Common/Phrase";

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
const SmallCard = styled.div`
  width: 163px;
  height: 231px;

  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.imageUrl});
  border-radius: 1rem;
  box-shadow: inset 0 1em 40px rgba(0, 0, 0, 0.5),
    inset 0 -1em 40px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  align-items: start;
`;

export default function MobileNoticeSection() {
  const matches_560 = useMediaQuery("(max-width:560px)");
  return (
    <MobileNoticeWrapper>
      <Phrase>공지사항</Phrase>
      <SmallMoreBtn>More</SmallMoreBtn>
      <SmallCardContainer>
        <SmallCard imageUrl="/assets/images/one.png"></SmallCard>
        <SmallCard imageUrl="/assets/images/one.png"></SmallCard>
        {!matches_560 && (
          <SmallCard imageUrl="/assets/images/one.png"></SmallCard>
        )}
      </SmallCardContainer>
    </MobileNoticeWrapper>
  );
}
