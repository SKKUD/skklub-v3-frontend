import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";

const TempContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px); //모바일 적용해야함
  background-color: grey;
  text-align: center;
  line-height: 50vh;
  font-weight: 900;
`;

export default function Seoul() {
  return (
    <>
      <TempContainer>오하은 화이팅</TempContainer>
    </>
  );
}
