import { useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import Link from "next/link";
import styles from "../../styles/hamburger.module.css";

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
  font-weight: 500;
  margin-left: 10px;
`;

const SidebarInner = styled.div`
  z-index: 1000;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  border: 1px solid #222;
  background-color: #151717;
  height: 100%;
  width: 50%;
  right: -50%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

export default function Sidebar({ isOpen, setOpen, navItems }) {
  const outside = useRef();
  const toggleSide = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  });

  const handleOutside = (e) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  return (
    <>
      <SidebarInner ref={outside} className={isOpen ? "open" : ""}>
        <IconButton
          className={`${styles.menutrigger} ${styles.type7} ${
            isOpen ? styles.active7 : ""
          }`}
          onClick={toggleSide}
          onKeyDown={toggleSide}
        >
          <span></span>
          <span></span>
          <span></span>
        </IconButton>

        <NavWrap onClick={toggleSide}>
          {navItems.map((item) => (
            <Link href={item.path} key={item.name}>
              {item.name}
            </Link>
          ))}
        </NavWrap>
      </SidebarInner>
    </>
  );
}
