import styled from "@emotion/styled";

const AttributeRow = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  gap: 20px;
  padding: 0 41px;
  justify-content: space-between;
  /* margin-bottom: 11px; */
`;

const AttributeRowItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Divider = styled.hr`
  height: 3px;
  background-color: #fff;
  border: none;
  margin: 0 41px;
`;

export default function NoticeTableHeader() {
  return (
    <>
      <AttributeRow>
        <AttributeRowItem style={{ width: "80px" }}>NO.</AttributeRowItem>
        <AttributeRowItem style={{ flex: 1 }}>제목</AttributeRowItem>
        <AttributeRowItem style={{ width: "200px" }}>작성자</AttributeRowItem>
        <AttributeRowItem style={{ width: "150px" }}>작성일지</AttributeRowItem>
      </AttributeRow>
      <Divider />
    </>
  );
}
