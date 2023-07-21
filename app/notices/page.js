"use client";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import NoticeRadioBtns from "@/app/components/notices/NoticeRadioBtns";
import NoticeTableHeader from "@/app/components/notices/NoticeTableHeader";
import NoticeTableBody from "@/app/components/notices/NoticeTableBody";
import NoticeTablePagination from "@/app/components/notices/NoticeTablePagination";
import NoticeBanner from "../components/notices/NoticeBanner";

const NoticesContentWrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 300px;
  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const NoticesBoard = styled.div`
  width: 100%;
  background-color: #2a3133;
  border-radius: 10px;
  padding-top: 47px;
  padding-bottom: 30px;
  margin-top: 24px;
`;

export default function Notices() {
  const [page, setPage] = useState(1);
  const match768 = useMediaQuery("(max-width:768px)");
  const handlePageChange = (e, value) => {
    e.preventDefault();
    setPage(value);
  };

  return (
    <>
      <NoticeBanner />
      <NoticesContentWrapper>
        <NoticeRadioBtns />
        <NoticesBoard>
          {!match768 && <NoticeTableHeader />}
          <NoticeTableBody />
          <NoticeTablePagination
            page={page}
            handlePageChange={handlePageChange}
          />
        </NoticesBoard>
      </NoticesContentWrapper>
    </>
  );
}
