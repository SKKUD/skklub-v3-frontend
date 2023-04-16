import styled from "@emotion/styled";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const NoticesBanner = styled.div`
  width: 100%;
  height: 378px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: #262626;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 3rem;
  line-height: 2rem;
`;

const NoticesContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1.5rem;
  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const AttributeRow = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  background: #2c2c2c;
  border-radius: 10px;
  gap: 20px;
`;

const AttributeRowItem = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export default function Notices() {
  return (
    <>
      <NoticesBanner>
        <SubTitle>성균관대학교 동아리연합회</SubTitle>
        <Title>공지사항</Title>
      </NoticesBanner>
      <NoticesContentWrapper>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
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
        </FormControl>
        <AttributeRow>
          <AttributeRowItem style={{}}>NO.</AttributeRowItem>
          <AttributeRowItem>제목</AttributeRowItem>
          <AttributeRowItem>글쓴이</AttributeRowItem>
          <AttributeRowItem>작성일지</AttributeRowItem>
        </AttributeRow>
      </NoticesContentWrapper>
    </>
  );
}
