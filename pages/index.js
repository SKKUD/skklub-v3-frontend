import Image from "next/image";
import styled from "@emotion/styled";
import logoImg from "../public/assets/images/skklub_logo_m.png";
import { useRouter } from "next/router";

const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("/assets/animations/web_loading.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 425px) {
    background-image: url("/assets/animations/mobile-loading.gif");
  }
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
`;

const Phrase = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  word-break: keep-all;
  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 8%;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const LocationBtn = styled.button`
  border: none;
  color: #434c4f;
  width: 100%;
  background-color: white;
  font-size: 1.5rem;
  /* padding-top: 1rem;
  padding-bottom: 1rem; */
  height: 68px;
  border-radius: 3rem;
  font-weight: 900;

  @media (max-width: 375px) {
    width: 115px;
    font-size: 1.25rem;
    height: 40px;
    padding: 0;
    margin-bottom: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: white;
  }
`;

export default function Home() {
  const router = useRouter();
  const onLocationBtnClick = (location) => {
    router.push(`/${location}`);
  };

  return (
    <HomePageContainer>
      <ItemContainer>
        <Logo>
          <Image
            src={logoImg}
            alt="SKKLUB LOGO"
            placeholder="blur"
            style={{
              height: "auto",
              width: "70vw",
              maxWidth: "1430px",
              minWidth: "310px",
            }}
          ></Image>
        </Logo>
        <PhraseBtnContainer>
          <Phrase>성균관대학교 동아리를 한눈에!</Phrase>
          <BtnContainer>
            <LocationBtn
              hoverColor="#80A4FF"
              onClick={() => onLocationBtnClick("seoul")}
            >
              명륜
            </LocationBtn>
            <LocationBtn
              hoverColor="#50CFB1"
              onClick={() => onLocationBtnClick("suwon")}
            >
              율전
            </LocationBtn>
          </BtnContainer>
        </PhraseBtnContainer>
      </ItemContainer>
    </HomePageContainer>
  );
}
