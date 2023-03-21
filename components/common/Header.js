import { useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import Link from "next/link";
import Sidebar from "./Sidebar";

const HeaderWrap = styled.div`
  position: static;
  width: 100%;
  height: 80px;
  padding: 20px;

  @media (max-width: 480px) {
    padding-right: 10px;
  }
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const HomeImgWrap = styled.div`
  margin-right: 80px;
  width: 110px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    margin-right: 60px;
    width: 90px;
  }

  @media (max-width: 768px) {
    margin-right: 40px;
    width: 70px;
  }
`;

const NavButtonFont = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const NavWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 480px) {
    display: none;
  }
`;

const HamburgerWrap = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
`;

function HomeButton() {
  return (
    <Link href="/">
      <HomeImgWrap>
        <img src="/BI.png" />
      </HomeImgWrap>
    </Link>
  );
}

function NavButton({ item }) {
  return (
    <Link href={`/${item.path}`}>
      <NavButtonFont>{item.name}</NavButtonFont>
    </Link>
  );
}

const navItems = [
  { name: "동아리연합회", path: "academic-clubs" },
  { name: "중앙동아리", path: "academic-clubs" },
  { name: "기타동아리", path: "academic-clubs" },
  { name: "소모임", path: "academic-clubs" },
  { name: "학회", path: "academic-clubs" },
  { name: "학생단체", path: "academic-clubs" },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleSide = () => {
    setOpen(true);
  };

  return (
    <>
      <HeaderWrap>
        <HeaderInner>
          <HomeButton />
          <NavWrap>
            {navItems.map((item) => (
              <NavButton item={item} key={item[0]} />
            ))}
          </NavWrap>
          <HamburgerWrap>
            <IconButton onClick={toggleSide}>
              <MenuIcon />
            </IconButton>
          </HamburgerWrap>
        </HeaderInner>
      </HeaderWrap>
      <Sidebar isOpen={isOpen} setOpen={setOpen} navItems={navItems} />
    </>
  );
}
