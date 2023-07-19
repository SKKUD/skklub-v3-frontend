import styled from "@emotion/styled";

const AttributeRow = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  background-color: #2c2c2c;
  border-radius: 10px;
  gap: 20px;
  padding: 0 36px;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const AttributeRowItem = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.first-row {
    flex: 0.5;
    justify-content: flex-start;
    padding-left: 10px;
  }
  &.second-row {
    flex: 5;
  }
  &.third-row {
    flex: 2;
  }
  &.last-row {
    flex: 1.3;
  }
`;

export default function NoticeTableHeader() {
  return (
    <AttributeRow>
      <AttributeRowItem className="first-row">NO.</AttributeRowItem>
      <AttributeRowItem className="second-row">제목</AttributeRowItem>
      <AttributeRowItem className="third-row">글쓴이</AttributeRowItem>
      <AttributeRowItem className="last-row">작성일지</AttributeRowItem>
    </AttributeRow>
  );
}
