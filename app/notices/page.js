"use client";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import NoticeRadioBtns from "@/app/components/notices/NoticeRadioBtns";
import NoticeTableHeader from "@/app/components/notices/NoticeTableHeader";
import NoticeTableBody from "@/app/components/notices/NoticeTableBody";
import NoticeTablePagination from "@/app/components/notices/NoticeTablePagination";

const NoticesBanner = styled.div`
  width: 100%;
  height: 236px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const SubTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 72%;
  }
`;
const Title = styled.div`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 72%;
  }
`;

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
      <NoticesBanner>
        <SubTitle>성균관대학교 동아리연합회</SubTitle>
        <Title>공지사항</Title>
      </NoticesBanner>
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
