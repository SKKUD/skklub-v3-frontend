import styled from "@emotion/styled";

const NoticeTitle = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 5px 0;

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 151.5%;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 2px;
  }
`;

export default NoticeTitle;
