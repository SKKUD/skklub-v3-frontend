import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components"

import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";

let StyledNav = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
`

let StyledLogo = styled.div`
width: 150px;
  float: left;
`

function Navbar() {
  const [show, setShow ] = useState(false);
    
  return (
    <StyledNav>
      <StyledLogo className="logo">
        <a href="">logo</a>
      </StyledLogo>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>

        <div className="rightMenu">
          <RightMenu />
        </div>

        <Button className="barsMenu" type="primary" onClick={() => setShow(true)}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={() => setShow(false)}
          visible={show}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </StyledNav>
  );
}

export default Navbar;
