import styled from "@emotion/styled";
import SectionTitle from "../SectionTitle";
import NoticeCard from "./NoticeCard";
import MoreBtn from "./MoreBtn";
import { useQuery } from "@tanstack/react-query";
import { getNoticeThumbnailCard } from "@/utils/fetch";

const MobileNoticeWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5.2rem;
`;

const NoticeCardsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
  gap: 16px;
`;

export default function MobileNoticeSection() {
  const pushToNotices = () => {
    router.push(`/notices`);
  };
  const { isLoading, data } = useQuery({
    queryKey: ["notice-thumbnail"],
    queryFn: () => getNoticeThumbnailCard(),
  });

  return (
    <MobileNoticeWrapper>
      <SectionTitle>공지사항</SectionTitle>
      <MoreBtn onClick={pushToNotices}>더보기</MoreBtn>
      <NoticeCardsContainer>
        {data &&
          data.content
            .slice(0, 2)
            .map((item) => <NoticeCard key={item.noticeId} item={item} />)}
      </NoticeCardsContainer>
    </MobileNoticeWrapper>
  );
}
