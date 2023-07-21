"use client";

import NoticeBanner from "@/app/components/notices/NoticeBanner";
import styled from "@emotion/styled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PageWrapper = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 1rem auto;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  background-color: rgba(42, 49, 51, 1);
  border-radius: 10px;
  padding-top: 44px;
  padding-left: 30px;
  padding-right: 30px;
`;

const TitleBox = styled.div`
  /* padding: 0 30px; */
  border-radius: 10px;
  position: relative;
  padding-bottom: 64px;
`;

const Title = styled.div`
  color: #fff;
  font-family: Gmarket Sans;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 28px */
  letter-spacing: -0.56px;
  margin-bottom: 1rem;
`;

const SubTitleWrapper = styled.div`
  display: flex;
`;

const SubTitle = styled.div`
  text-align: center;

  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  padding-right: 47px;
  border-right: 1px solid #fff;
  margin-right: 20px;
`;

const Divider = styled.hr`
  height: 3px;
  background-color: #fff;
  border: none;
  margin-top: 22px;
  width: 100%;
`;

const Attachment = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  position: absolute;
  right: 46px;
  bottom: 22px;
`;

const ContentBox = styled.div`
  padding: 0 25px;
  text-align: left;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  min-height: 760px;
`;

const NavWrapper = styled.div`
  margin-top: 56px;
  margin-bottom: 22px;
`;

const Navigator = styled.div`
  position: relative;
  height: 73px;
  padding-right: 25px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavLabel = styled.div`
  text-align: left;
  margin-right: 30px;
  color: #fff;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
`;

const NextTitle = styled.div`
  text-align: left;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
`;

const NavWriter = styled.div`
  color: #949595;
  text-align: right;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  position: absolute;
  right: 25px;
`;

const ArrowBtn = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackToListBtn = styled.div`
  width: 98px;
  height: 39px;
  background: rgba(67, 76, 79, 1);
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0em;
  overflow: hidden;
  color: #fff;
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  margin: 0 auto;
`;

export default function NoticePage() {
  return (
    <>
      <NoticeBanner />
      <PageWrapper>
        <TitleBox>
          <Title>[밴드] 제 22회 못갖춘마디 정기공연 초청</Title>
          <SubTitleWrapper>
            <SubTitle>인사캠 제 42대 동아리연합회 동글</SubTitle>
            <SubTitle
              style={{
                border: "none",
              }}
            >
              2023-04-05
            </SubTitle>
          </SubTitleWrapper>
          <Divider />
          <Attachment>첨부파일(1)</Attachment>
        </TitleBox>
        <ContentBox>
          {
            "<2023학년도 2학기 「창업실습」 및 「창업현장실습」 신청 안내(창업대체학점인정제)>1. 창업실습 및 창업현장실습 프로그램 1)『창업실습』 및 『창업현장실습』 교과목은 창업대체학점인정제도로 2018학년도 처음 시행되는 제도 2) 창업 준비활동(창업실습) 및 창업 활동(창업현장실습)을 통해 학습 목표 달성이 가능할 경우 이를 학점으로 인정하는 교육과정 3) 창업으로 인한 학업 중단을 최소화하고 재학 중 창업 활동에 몰두하게 함으로서 진로 탐색의 폭을 넓힐 수 있는 프로그램2. 신청 자격1) 「창업실습」 학부생 신입학자로서 2회 이상 등록한 재학생 또는 편입학자로서 1회 이상 등록한 재학생(유급학기 제외)○ 교내(창업교육센터, 창업지원단) 창업동아리에서 활동 중인 학생 또는 창업동아리 가입 예정 학생, 또는 창업에 관심 있는 학생○ 당해 학기 등록을 필한 학생2) 「창업현장실습」○ 학부생 신입학자로서 2 이상 등록한 재학생 또는 편입학자로서 1회 이상 등록한 재학생(유급학기 제외)○ 창업 교과목을 1과목 이상 이수한 학생○ 창업 기업의 사업자등록증 상 대표(공동대표 포함)인 학생      (수강신청일 기준으로 최소 1개월 이전에 창업한 경우)○ 당해 학기 등록을 필한 학생○ 해당 업종은 붙임 자료 참조 ※「창업현장실습」은 재학 중 1회에 한해서 인정3. 신청 방법 1)「창업실습」 ○ 「창업실습」은 선택과목(2학점, P/F, 절대평가, 학부생 수강)으로 일반 교과목과 동일 기간에 수강 신청 ○ 별도의  제출서류 없이 교내(창업교육센터, 창업지원단) 창업동아리에서 활동 중인 학생 또는 창업동아리 가입 예정 학생, 또는 창업에 관심 있는 학생은 누구나 신청 가능  2)「창업현장실습」 ○ 신청기간: 2023. 7. 24.(월) ~ 8. 7.(월), 09시 ~ 17시○ 신청방법: 킹고포털 → 챌린지스퀘어 → 취업/창업활동 → 창업현장실습 신청○ 제출서류: 창업현장실습수행계획서, 개인정보 수집·이용 동의서(하단 양식 첨부), 사업자등록증(2주 이내 발급 서류) 작성 후 스캔하여 PDF 파일로 챌린지스퀘어 제출4. 첨부의 내용 및 지침 반드시 숙지하고 신청바랍니다. ○ 학과장의 수강승인이 안 될 경우를 대비하여 다른 과목 수강신청을 완료하여 주시기 바라며, 수강승인이 완료된 경우에는 이미 기존 수강신청 내역을 삭제하여 주시기 바랍니다.5. 학과별 전공 교육과정에 창업현장실습교과목 편성되지 않는 경우도 있으니  첨부의 안내문 붙임을 확인하여 주시기 바랍니다.6. 문의 : 창업지원단 03) 290 - 5653붙임   2023학년도 2학기 창업실습 및 창업현장실 신청 안내(지침 포함) 1부.  끝."
          }
        </ContentBox>
        <NavWrapper>
          <Divider style={{ marginTop: 0 }} />
          <Navigator>
            <NavLabel>이전글</NavLabel>
            <NextTitle>다음 공지사항이 없습니다.</NextTitle>
            <NavWriter>인사캠 제 42대 동아리연합회 동글</NavWriter>
          </Navigator>
          <Divider style={{ marginTop: 0, height: "1px" }} />
          <Navigator>
            <NavLabel>다음글</NavLabel>
            <NextTitle>
              [문화기획국] 동아리체험단 신청방법 카드뉴스 - 학생
            </NextTitle>
          </Navigator>
          <Divider style={{ marginTop: 0 }} />
        </NavWrapper>
        <BackToListBtn>목록으로</BackToListBtn>
      </PageWrapper>
    </>
  );
}
