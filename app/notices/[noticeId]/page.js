"use client";

import styled from "@emotion/styled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 1rem auto;
  margin-top: 103px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 3rem;
`;

const TitleWrapper = styled.div`
  background-color: rgba(44, 44, 44, 1);
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;

  margin-bottom: 1rem;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;

const MainTextWrapper = styled.div`
  background-color: rgba(44, 44, 44, 1);
  padding: 2rem;
  border-radius: 10px;
  padding-top: 1.5rem;

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  min-height: 760px;
`;

const Navigator = styled.div`
  height: 56px;
  background: rgba(44, 44, 44, 1);
  border-radius: 5px;
  padding-right: 23px;
  padding-left: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MainLabel = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 30px;
`;

const NextTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const ArrowBtn = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackToListBtn = styled.div`
  width: 174px;
  height: 56px;
  background: rgba(44, 44, 44, 1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.5rem;
  letter-spacing: 0em;
  cursor: pointer;
`;

export default function NoticePage() {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <Title>[밴드] 제 22회 못갖춘마디 정기공연 초청</Title>
        <SubTitleWrapper>
          <SubTitle>못갖춘 마디</SubTitle>
          <SubTitle>2023-04-05</SubTitle>
        </SubTitleWrapper>
      </TitleWrapper>
      <MainTextWrapper>
        어쩌구저쩌구 초청합니다 어쩌구저쩌구 초청합니다.어쩌구저쩌구 초청합니다.
        어쩌구저쩌구 초청합니다. 어쩌구저쩌구 초청합니다.어쩌구저쩌구
        초청합니다.어쩌구저쩌구 초청합니다. 어쩌구저쩌구 초청합니다.어쩌구저쩌구
        초청합니다. 어쩌구저쩌구 초청합니다. 어쩌구저쩌구
        초청합니다.어쩌구저쩌구 초청합니다.어쩌구저쩌구 초청합니다.
      </MainTextWrapper>
      <>
        <Navigator>
          <MainLabel>다음글</MainLabel>
          <NextTitle>다음 공지사항이 없습니다.</NextTitle>
          <ArrowBtn>
            <ExpandLessIcon fontSize="large" />
          </ArrowBtn>
        </Navigator>
        <Navigator>
          <MainLabel>이전글</MainLabel>
          <NextTitle>
            [문화기획국] 동아리체험단 신청방법 카드뉴스 - 학생
          </NextTitle>
          <ArrowBtn>
            <ExpandMoreIcon fontSize="large" />
          </ArrowBtn>
        </Navigator>
      </>
      <BackToListBtn>목록</BackToListBtn>
    </ContentWrapper>
  );
}
