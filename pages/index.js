import Head from "next/head";
import Image from "next/image";
import Footer from "../components/common/Footer";
import IntroLayout from "../layout/intro/IntroLayout";
import styled from "@emotion/styled";

const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ItemContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -30%);
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-color: beige;
`;

const PhraseBtnContainer = styled.div``;

const Phrase = styled.div``;

const BtnContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const LocationBtn = styled.button``;

export default function Home() {
  return (
    <HomePageContainer>
      <ItemContainer>
        <Logo></Logo>
        <PhraseBtnContainer>
          <Phrase></Phrase>
          <BtnContainer>
            <LocationBtn></LocationBtn>
            <LocationBtn></LocationBtn>
          </BtnContainer>
        </PhraseBtnContainer>
      </ItemContainer>
    </HomePageContainer>
  );
}
