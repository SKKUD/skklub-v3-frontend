import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import css from "styled-jsx/css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import Link from "next/link";
import Sidebar from "./Sidebar";
import styles from "../../styles/hamburger.module.css";

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #151717;
  width: 100%;
  height: 80px;
  padding: 20px;
  @media (max-width: 769px) {
    height: 60px;
  }
  @media (max-width: 480px) {
    padding-right: 10px;
    height: 48px;
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
    width: 90%;
  }

  @media (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const HomeImgWrap = styled.div`
  margin-right: 80px;
  width: 132px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    margin-right: 60px;
    width: 110px;
  }

  @media (max-width: 768px) {
    margin-right: 40px;
    width: 90px;
  }
`;

const NavButtonFont = styled.div`
  font-weight: bold;
  line-height: 1.25rem;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const NavWrap = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;

  @media (max-width: 480px) {
    display: none;
  }
`;

const IconButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 1.25rem;
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
        <img src="/assets/images/skklub_명륜.png" />
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

const style = css`
  .startPage,
  .hide_header {
    display:none;
  },
  

`;

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleSide = (e) => {
    setOpen(true);
  };

  const router = useRouter();
  const campus = router.pathname.slice(0, 6);
  const navItems = [
    { name: "동아리연합회", path: campus + "/intro" },
    { name: "중앙동아리", path: campus + "/central-clubs" },
    { name: "기타동아리", path: campus + "/independent-clubs" },
    { name: "소모임", path: campus + "/groups" },
    { name: "학회", path: campus + "/academic-clubs" },
    { name: "학생단체", path: campus + "/student-org" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div
      className={
        router.pathname === "/"
          ? "startPage"
          : (router.pathname === "/seoul" || router.pathname === "/suwon") &&
            scrollPosition === 0
          ? "hide_header"
          : ""
      }
    >
      <HeaderWrap>
        <HeaderInner>
          <HomeButton />
          <NavWrap>
            {navItems.map((item) => (
              <NavButton item={item} key={item.name} />
            ))}
          </NavWrap>
          <IconButtonsWrap>
            <IconButton>
              <SearchIcon />
            </IconButton>

            <HamburgerWrap>
              <IconButton
                className={`${styles.menutrigger} ${styles.type7} ${
                  isOpen ? styles.active7 : ""
                }`}
                onClick={toggleSide}
              >
                <span></span>
                <span></span>
                <span></span>
              </IconButton>
            </HamburgerWrap>
          </IconButtonsWrap>
        </HeaderInner>
      </HeaderWrap>
      <Sidebar isOpen={isOpen} setOpen={setOpen} navItems={navItems} />
      <style jsx>{style}</style>
    </div>
  );
}
