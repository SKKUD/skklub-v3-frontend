import { Layout, Menu } from "antd";
import styled from "styled-components";

const { Sider } = Layout;

const items = ["홈","중앙동아리", "기타동아리", "소모임", "학회", "학생 단체"];

const StyledSider = styled(Sider)`
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: #fff;
`;

export default function Sidebar() {
  return (
    <StyledSider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu mode="inline" defaultSelectedKeys={["0"]}>
        {items.map((value, index) => {
          return <Menu.Item style={{ paddingLeft: "50px",}} key={index}>{value}</Menu.Item>;
        })}
      </Menu>
    </StyledSider>
  );
}
