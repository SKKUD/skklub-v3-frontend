import { useState } from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getNoticeListwithRole } from "@/utils/fetch";
import NoticeTableHeader from "./NoticeTableHeader";
import NoticeTablePagination from "./NoticeTablePagination";
import { useRouter } from "next/navigation";

const TableWrapper = styled.div`
  width: 100%;
  padding: 27px 44px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin-top: 18px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  @media (max-width: 768px) {
    padding: 19px 13px;
    margin-top: 0;
  }
`;

const NoticeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`;
const NoticeRowItem = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  font-weight: 500;
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
    justify-content: center;
  }
  &.second-row {
    display: block;
    flex: 5;
    justify-content: flex-start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
  }
  &.third-row {
    flex: 2;
    font-size: 16px;
  }
  &.last-row {
    flex: 1.2;
    font-size: 16px;
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

export default function NoticeTableBody({ role }) {
  const router = useRouter();
  const pushToNoticeDetail = (nextLocation) => {
    router.push(`${nextLocation}`);
  };
  const match768 = useMediaQuery("(max-width:768px)");
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery({
    queryKey: ["notices", role, page],
    queryFn: () => getNoticeListwithRole({ role, page }),
    onSuccess: (data) => console.log(data),
  });
  const handlePageChange = (e, value) => {
    e.preventDefault();
    setPage(value);
  };

  return (
    <TableWrapper>
      {!match768 && <NoticeTableHeader />}
      {data &&
        data.content.map((item) => (
          <div
            key={item.noticeId}
            onClick={() => pushToNoticeDetail(`/notices/${item.noticeId}`)}
          >
            <NoticeRow>
              {!match768 && (
                <NoticeRowItem className="first-row">
                  {item.noticeId}
                </NoticeRowItem>
              )}
              <NoticeRowItem className="second-row">{item.title}</NoticeRowItem>
              {match768 ? (
                <MobileItemWrapper>
                  <MobileItem>{item.writerName}</MobileItem>
                  <MobileItem>{item.createdAt.substr(0, 10)}</MobileItem>
                </MobileItemWrapper>
              ) : (
                <>
                  <NoticeRowItem className="third-row">
                    {item.writerName}
                  </NoticeRowItem>
                  <NoticeRowItem className="last-row">
                    {item.createdAt.substr(0, 10)}
                  </NoticeRowItem>
                </>
              )}
            </NoticeRow>
          </div>
        ))}
      <NoticeTablePagination
        totalPages={data && data.totalPages}
        page={page}
        handlePageChange={handlePageChange}
      />
    </TableWrapper>
  );
}
