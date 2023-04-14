import styled from "@emotion/styled";

const ClubDetailBanner = styled.div`
  width: 100vw;
  height: 378px;
  background-color: #a0211d33;
`;

const ClubDetailContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  gap: 30px;
  margin-bottom: 300px;
`;

const ClubDetailCard = styled.div`
  background-color: #2c2c2c;
  height: 264px;
  border-radius: 10px;
`;

export default function ClubDetail() {
  return (
    <>
      <ClubDetailBanner></ClubDetailBanner>
      <ClubDetailContent>
        <ClubDetailCard
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
          }}
        ></ClubDetailCard>
        <ClubDetailCard
          style={{
            height: "403px",
          }}
        ></ClubDetailCard>
        <ClubDetailCard
          style={{
            gridColumnStart: 2,
            gridColumnEnd: 4,
            height: "403px",
          }}
        ></ClubDetailCard>
        <ClubDetailCard
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
          }}
        ></ClubDetailCard>
      </ClubDetailContent>
    </>
  );
}
