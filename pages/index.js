import Head from "next/head";
import Image from "next/image";
import Footer from "../components/common/Footer";
import IntroLayout from "../layout/intro/IntroLayout";
import styled from "@emotion/styled";
import logoImg from "../assets/images/skklub_logo_m.png";

const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ItemContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div``;

const PhraseBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Phrase = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 2rem;
`;

const BtnContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  gap: 8%;
`;

const LocationBtn = styled.button`
  border: none;
  color: black;
  width: 100%;
  background-color: white;
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 3rem;
  font-weight: 900;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: white;
  }
`;

export default function Home() {
  return (
    <HomePageContainer>
      <ItemContainer>
        <Logo>
          <Image
            src={logoImg}
            alt="SKKLUB LOGO"
            placeholder="blur"
            style={{
              // objectFit: "contain",
              height: "auto",
              width: "70vw",
              maxWidth: "1430px",
            }}
            // sizes="(max-width: 768px) 100vw,
            // (max-width: 1200px) 50vw,
            // 33vw"
          ></Image>
        </Logo>
        <PhraseBtnContainer>
          <Phrase>성균관대학교 동아리를 한눈에!</Phrase>
          <BtnContainer>
            <LocationBtn hoverColor="#80A4FF">명륜</LocationBtn>
            <LocationBtn hoverColor="#50CFB1">율전</LocationBtn>
          </BtnContainer>
        </PhraseBtnContainer>
      </ItemContainer>
    </HomePageContainer>
  );
}
