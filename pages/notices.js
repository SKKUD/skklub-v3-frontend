import styled from "@emotion/styled";
import {
  FormControl,
  FormControlLabel,
  Pagination,
  PaginationItem,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import NoticeRadioBtns from "../components/notices/NoticeRadioBtns";

const NoticesBanner = styled.div`
  width: 100%;
  height: 378px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 72%;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 3rem;
  line-height: 2rem;
  @media (max-width: 768px) {
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 72%;
  }
`;

const NoticesContentWrapper = styled.div`
  max-width: 1200px;
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

const AttributeRow = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  background-color: #2c2c2c;
  border-radius: 10px;
  gap: 20px;
  padding: 0 44px;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const AttributeRowItem = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoticesTable = styled.div`
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
  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 21px;
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
  border-top: 1px solid #737d81;
`;

const PaginationWrapper = styled.div`
  width: 100%;
  height: 15px;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const DUMMY_ARRAY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
        {/* <FormControl>
          {!match768 && (
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{ marginLeft: "30px" }}
            >
              <FormControlLabel
                value="all"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="전체"
              />
              <FormControlLabel
                value="seoul"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "white",
                      },
                      marginLeft: "60px",
                    }}
                  />
                }
                label="명륜 동아리"
              />
              <FormControlLabel
                value="suwon"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "white",
                      },
                      marginLeft: "60px",
                    }}
                  />
                }
                label="율전 동아리"
              />
            </RadioGroup>
          )}
        </FormControl> */}
        <NoticeRadioBtns />

        {match768 ? (
          <div></div>
        ) : (
          <AttributeRow>
            <AttributeRowItem style={{ width: "80px" }}>NO.</AttributeRowItem>
            <AttributeRowItem style={{ flex: 1 }}>제목</AttributeRowItem>
            <AttributeRowItem style={{ width: "200px" }}>
              글쓴이
            </AttributeRowItem>
            <AttributeRowItem style={{ width: "150px" }}>
              작성일지
            </AttributeRowItem>
          </AttributeRow>
        )}

        <NoticesTable>
          {DUMMY_ARRAY.map((ele) => (
            <>
              <NoticeRow>
                {!match768 && (
                  <NoticeRowItem style={{ width: "80px" }}>34</NoticeRowItem>
                )}
                <NoticeRowItem style={{ flex: 1, justifyContent: "start" }}>
                  [밴드] 제 22회 못갖춘마디 정기공연 초청
                </NoticeRowItem>
                {match768 ? (
                  <MobileItemWrapper>
                    <MobileItem>못갖춘마디</MobileItem>
                    <MobileItem>2023-04-25</MobileItem>
                  </MobileItemWrapper>
                ) : (
                  <>
                    <NoticeRowItem style={{ width: "200px" }}>
                      못갖춘 마디
                    </NoticeRowItem>
                    <NoticeRowItem style={{ width: "150px" }}>
                      2023-04-25
                    </NoticeRowItem>
                  </>
                )}
              </NoticeRow>
              <NoticeDivider />
            </>
          ))}
        </NoticesTable>
        <PaginationWrapper>
          <Pagination
            count={5}
            defaultPage={1}
            page={page}
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                sx={{
                  backgroundColor: "transparent !important",
                  fontSize: "1.25rem",
                  lineHeight: "1.25rem",
                  fontWeight: "400",
                  color: item.selected ? "#50CFB1" : "rgba(255, 255, 255, 0.5)",
                }}
                {...item}
              />
            )}
          />
        </PaginationWrapper>
      </NoticesContentWrapper>
    </>
  );
}
