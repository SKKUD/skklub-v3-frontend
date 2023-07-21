"use client";
 
import { useRouter,useParams } from 'next/navigation'
import { useQuery } from "@tanstack/react-query";
import NoticeBanner from "@/app/components/notices/NoticeBanner";
import styled from "@emotion/styled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getNoticeDetail } from '@/utils/fetch';

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
  font-family: GmarketSansMedium;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
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
  margin-left: 5px;
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
  white-space: pre-line;
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
  const params = useParams()
  const { isLoading, data } = useQuery({queryKey: ["notice-detail"], queryFn: ()=> getNoticeDetail(params.noticeId),onSuccess: (data)=> console.log(data)});
  const router = useRouter();
  const pushToNotices = () => {
    router.push(`/notices`);
  };
  return (
    <>
      <NoticeBanner />
      <PageWrapper>
        <TitleBox>
          <Title>{data && data.title}</Title>
          <SubTitleWrapper>
            <SubTitle>{data && data.writerName}</SubTitle>
            <SubTitle
              style={{
                border: "none",
              }}
            >
              {data && data.createdAt.substr(0,10)}
            </SubTitle>
          </SubTitleWrapper>
          <Divider />
          <Attachment>{data && data.extraFileNames.length > 0 && `첨부파일(${data.extraFileNames.length})`}</Attachment>
        </TitleBox>
        <ContentBox>
        {data && data.content}
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
        <BackToListBtn onClick={pushToNotices}>목록으로</BackToListBtn>
      </PageWrapper>
    </>
  );
}
