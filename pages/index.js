import Head from "next/head";
import Image from "next/image";
import StyledButton from "../components/common/Button";
import CommonHeader from "../components/common/CommonHeader";
import Sidebar from "../components/common/Sidebar";
import styled from "styled-components";
import { Layout } from "antd";

const { Content, Footer } = Layout;

export default function Home() {
  return (
    <div>
      <Layout>
        <CommonHeader />
        <Layout style={{ marginTop: 64 }}>
          <Sidebar />
          <Content style={{ margin: "24px 16px 0", height: "200vh" }}>
            <div style={{ padding: 24, minHeight: 360 }}>content</div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          SKKLUB - Created and Maintained by 기술지원위원회
        </Footer>
      </Layout>
    </div>
  );
}
