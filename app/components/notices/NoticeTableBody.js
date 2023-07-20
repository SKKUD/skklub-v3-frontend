import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getNoticeListwithRole } from "@/utils/fetch";

const TableWrapper = styled.div`
  width: 100%;
  padding: 27px 44px;
  background-color: #2c2c2c;
  margin-top: 18px;
  border-radius: 12px;
  @media (max-width: 768px) {
    padding: 19px 13px;
    margin-top: 0;
  }
`;

const NoticeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 56px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`;
const NoticeRowItem = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: pretendard;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 21px;
  }

  &.first-row {
    flex: 0.5;
    justify-content: flex-start;
    padding-left: 13px;
  }
  &.second-row {
    flex: 5;
    justify-content: flex-start;
  }
  &.third-row {
    flex: 2;
  }
  &.last-row {
    flex: 1.2;
  }
`;

const MobileItemWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const MobileItem = styled.div`
  font-weight: 400;
  font-size: 0.75px;
  line-height: 14px;
`;

const NoticeDivider = styled.hr`
  border: 0px;
  border-top: 0.3px solid #575757;
`;

const content = [
  {
    noticeId: "1983279873",
    title: "[밴드] 제 22회 못갖춘마디 정기공연 초청",
    writerName: "못갖춘마디",
    createdAt: "2023-04-25",
  },
  {
    noticeId: "1983279874",
    title: "[밴드] 제 22회 못갖춘마디 정기공연 초청",
    writerName: "못갖춘마디",
    createdAt: "2023-04-25",
  },

  {
    noticeId: "1983279876",
    title: "[밴드] 제 22회 못갖춘마디 정기공연 초청",
    writerName: "못갖춘마디",
    createdAt: "2023-04-25",
  },
  {
    noticeId: "1983279878",
    title: "[밴드] 제 22회 못갖춘마디 정기공연 초청",
    writerName: "못갖춘마디",
    createdAt: "2023-04-25",
  },
  {
    noticeId: "1983279879",
    title: "[밴드] 제 22회 못갖춘마디 정기공연 초청",
    writerName: "못갖춘마디",
    createdAt: "2023-04-25",
  },
];

export default function NoticeTableBody() {
  const match768 = useMediaQuery("(max-width:768px)");
  const { isLoading, data } = useQuery(["notices"], getNoticeListwithRole);
  console.log(data)

  return (
    <TableWrapper>
      {content.map((item, idx) => (
        <div key={idx}>
          <NoticeRow>
            {!match768 && (
              <NoticeRowItem className="first-row">{idx}</NoticeRowItem>
            )}
            <NoticeRowItem className="second-row">{item.title}</NoticeRowItem>
            {match768 ? (
              <MobileItemWrapper>
                <MobileItem>{item.writerName}</MobileItem>
                <MobileItem>{item.createdAt}</MobileItem>
              </MobileItemWrapper>
            ) : (
              <>
                <NoticeRowItem className="third-row">
                  {item.writerName}
                </NoticeRowItem>
                <NoticeRowItem className="last-row">
                  {item.createdAt}
                </NoticeRowItem>
              </>
            )}
          </NoticeRow>
          {idx !== content.length - 1 && <NoticeDivider />}
        </div>
      ))}
    </TableWrapper>
  );
}
