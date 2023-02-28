import styled from "@emotion/styled";

const FooterWrap = styled.div`
  width: 100%;
  height: 300px;
  color: #fff;
  text-align: center;
  line-height: 300px;
  font-size: 20px;
  font-weight: 600;
  background-color: #262626;
  margin-top: 70px;
`;

export default function Footer() {
  return (
    <FooterWrap>SKKLUB - Created and Maintained by 기술지원위원회</FooterWrap>
  );
}
