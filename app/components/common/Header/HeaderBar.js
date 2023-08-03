import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import styles from "./hamburger.module.css";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { categoryState } from "@/utils/atoms";
import CampusSwitch from "../CampusSwitch/CampusSwitch";
import useThemeModeDetect from "@/hooks/useThemeModeDetect";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: ${(props) => (props.isDarkMode ? "#2A3133" : "#F5F4EA")};
  width: 100%;
  height: 60px;
  padding: 20px 30px;

  @media (max-width: 480px) {
    height: 80px;
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
    width: 100%;
  }
`;

const HomeImgWrap = styled.div`
  width: 120px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 110px;
  }

  @media (max-width: 768px) {
    margin-right: 40px;
    width: 90px;
  }
  @media (max-width: 480px) {
    width: 120px;
  }
`;

const NavButtonFont = styled.div`
  font-weight: 600;
  line-height: 16px;

  color: ${(props) =>
    props.isMatch
      ? props.isSuwon
        ? props.theme.palette.primary.main
        : props.theme.palette.secondary.main
      : props.isDarkMode
      ? props.theme.palette.text.primary
      : "#585858"};
  &:hover {
    color: ${(props) =>
      props.isSuwon
        ? props.theme.palette.primary.main
        : props.theme.palette.secondary.main};
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const NavWrap = styled.div`
  display: flex;
  width: 50%;
  min-width: 500px;
  justify-content: space-between;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const IconButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 1.25rem;
`;

const ResponsiveMargin = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const HamburgerWrap = styled.div`
  margin-left: 15px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

function HomeButton({ location }) {
  return (
    <Link href={`/${location}`}>
      <HomeImgWrap>
        {location === "suwon" ? (
          <img src="/assets/images/skklub_명륜.png" />
        ) : (
          <img src="/assets/images/skklub_율전.png" />
        )}
      </HomeImgWrap>
    </Link>
  );
}

function NavButton({ item, isDarkMode, isSuwon, type }) {
  const setCategory = useSetRecoilState(categoryState);

  const onLinkClick = () => {
    setCategory("전체보기");
  };
  return (
    <Link href={`/${item.path}`}>
      <NavButtonFont
        isDarkMode={isDarkMode}
        isSuwon={isSuwon}
        isMatch={type === item.check}
        onClick={onLinkClick}
      >
        {item.name}
      </NavButtonFont>
    </Link>
  );
}

export default function HeaderBar({ location, isSuwon, type }) {
  const [isOpen, setOpen] = useState(false);
  const toggleSide = (e) => {
    setOpen(true);
  };
  const isDarkMode = useThemeModeDetect();

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const match760 = useMediaQuery("(max-width:760px)");

  const navItems = [
    { name: "동아리연합회", path: location + "/intro", check: "intro" },
    {
      name: "중앙동아리",
      path: location + "/central-clubs",
      check: "central-clubs",
    },
    {
      name: "기타동아리",
      path: location + "/independent-clubs",
      check: "independent-clubs",
    },
    { name: "소모임", path: location + "/groups", check: "groups" },
    {
      name: "학회",
      path: location + "/academic-clubs",
      check: "academic-clubs",
    },
    {
      name: "학생단체",
      path: location + "/student-org",
      check: "student-org",
    },
  ];

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <>
      <HeaderWrap isDarkMode={isDarkMode}>
        <HeaderInner>
          <HomeButton location={location} />
          <NavWrap>
            {navItems.map((item) => (
              <NavButton
                item={item}
                isDarkMode={isDarkMode}
                isSuwon={isSuwon}
                type={type}
                key={item.name}
              />
            ))}
          </NavWrap>

          <IconButtonsWrap>
            <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
            {type !== "notices" && !match760 && isNaN(type) && <CampusSwitch />}
            <IconButton onClick={handleSearchClick}>
              {isSearchVisible ? (
                <CloseIcon
                  sx={{
                    fontSize: "35px",
                    color: isDarkMode ? "#fff" : "#585858",
                  }}
                />
              ) : (
                <SearchIcon
                  sx={{
                    fontSize: "35px",
                    color: isDarkMode ? "#fff" : "#585858",
                  }}
                />
              )}
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
      {isSearchVisible && (
        <Searchbar
          isDarkMode={isDarkMode}
          setIsSearchVisible={setIsSearchVisible}
        />
      )}
      {type === undefined ? (
        <ResponsiveMargin height={200} />
      ) : match760 ? (
        <ResponsiveMargin height={80} />
      ) : (
        <ResponsiveMargin height={60} />
      )}
      <Sidebar isOpen={isOpen} setOpen={setOpen} navItems={navItems} />
    </>
  );
}
