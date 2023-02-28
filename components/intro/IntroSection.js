import styled from '@emotion/styled';

const IntroSectionLayout = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
    align-items: flex-start;
	width: 100%;
    margin-bottom: 2rem;
    word-break: keep-all;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const IntroPill = styled.div`
	background-color: ${(props) => props.theme.palette.primary.main};
	color: ${(props) => props.theme.palette.text.primary};
	padding: 0.7em 1.6rem;
	border-radius: 50px;
	margin: 0.5rem;
	font-size: 1.5rem;
	font-weight: 600;
	width: 20%;
	text-align: center;

    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
    }
`;

const IntroCard = styled.div`
	background-color: ${(props) => props.theme.palette.background.paper};
	color: ${(props) => props.theme.palette.text.primary};
	padding: 1.5rem 2.5rem;
	border-radius: 1rem;
	margin: 0.5rem;
	width: 76%;

    margin-left: 3rem;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

const Title = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 1.2rem;
`;

const RedSpan = styled.span`
    color: ${(props) => props.theme.palette.secondary.main};
`;

const Body = styled.p`
	font-size: 1.3rem;
	font-weight: 200;
    line-height: 30px;
`;

export default function IntroSection(props) {
	return (
		<>
			<IntroSectionLayout>
				<IntroPill>Who we are</IntroPill>
				<IntroCard>
					<Title>안녕하세요, 동아리연합회 <RedSpan>{props.data.name}</RedSpan> 입니다!</Title>
					<Body>{props.data.section[0]}</Body>
				</IntroCard>
			</IntroSectionLayout>
			<IntroSectionLayout>
				<IntroPill>What we do</IntroPill>
				<IntroCard>
					<Title>저희는 이런 활동을 해요!</Title>
					<Body>{props.data.section[1]}</Body>
				</IntroCard>
			</IntroSectionLayout>
			<IntroSectionLayout>
				<IntroPill>How we work</IntroPill>
				<IntroCard>
					<Title>동아리연합회는 이렇게 구성되어 있어요!</Title>
					<Body>{props.data.section[2]}</Body>
				</IntroCard>
			</IntroSectionLayout>
		</>
	);
}
