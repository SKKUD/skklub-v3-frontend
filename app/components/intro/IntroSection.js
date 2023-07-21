import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import useURLParse from "@/hooks/useURLParse";

const IntroSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 95%;
  margin-bottom: 2rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 2rem 0;
  }
`;

const IntroPill = styled.div`
  background-color: ${(props) =>
    props.campus ? "rgba(134, 221, 200, 1)" : "rgba(128, 164, 255, 1)"};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 18px 20px;
  border-radius: 16px;
  margin: 0.5rem;
  font-size: 20px;
  font-weight: 600;
  min-width: 20%;
  text-align: center;

  @media (max-width: 768px) {
    border-radius: 50px;
    min-width: 50%;
    font-size: 1.2rem;
    padding: 0.7rem 1rem;
    position: absolute;
    top: -2rem;
  }
`;

const IntroCard = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 24px;
  border-radius: 1rem;
  margin: 0.5rem;
  width: 85%;
  margin-left: 3rem;
  align-self: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 1.5rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
`;

const RedSpan = styled.span`
  color: ${(props) =>
    props.campus ? "rgba(134, 221, 200, 1)" : "rgba(128, 164, 255, 1)"};

  word-break: keep-all;
`;

const Body = styled.p`
  font-family: pretendard;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function IntroSection(props) {
  const match480 = useMediaQuery("(max-width:480px)");
  const { isSuwon } = useURLParse();

  return (
    <>
      {!match480 && (
        <Title>
          안녕하세요, 동아리연합회{" "}
          <RedSpan campus={!isSuwon}>{props.data.name}</RedSpan>입니다!
        </Title>
      )}
      <IntroSectionLayout>
        <IntroPill campus={!isSuwon}>
          {match480 ? "Who we are" : "동아리연합회는 어떤 단체인가요?"}
        </IntroPill>
        <IntroCard>
          {match480 && (
            <Title>
              안녕하세요, <br />
              동아리연합회
              <RedSpan campus={!isSuwon}>{props.data.name}</RedSpan>입니다!
            </Title>
          )}
          <Body>{props.data.section[0]}</Body>
        </IntroCard>
      </IntroSectionLayout>
      <IntroSectionLayout>
        <IntroPill campus={!isSuwon}>
          {match480 ? "What we do" : "동아리 연합회는 무슨 일을 하나요?"}
        </IntroPill>
        <IntroCard>
          {match480 && (
            <Title>
              저희는 <br />
              이런 활동을 해요!
            </Title>
          )}
          <Body>{props.data.section[1]}</Body>
        </IntroCard>
      </IntroSectionLayout>
      <IntroSectionLayout>
        <IntroPill campus={!isSuwon}>
          {match480 ? "How we work" : "동아리 연합회는 어떻게 구성되어있나요?"}
        </IntroPill>
        <IntroCard>
          {match480 && (
            <Title>
              동아리연합회는 <br />
              이렇게 구성되어 있어요!
            </Title>
          )}
          <Body>{props.data.section[2]}</Body>
        </IntroCard>
      </IntroSectionLayout>
    </>
  );
}
