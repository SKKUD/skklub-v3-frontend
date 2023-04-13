import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const ClubsBanner = styled.div`
  width: 100vw;
  height: 378px;
  background-color: green;
`;

const CardsContainer = styled.div`
  /* width: 100%; */
  max-width: 1200px;
  margin: 0 auto;
  height: 1000px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: center;
`;

const ClubCard = styled.div`
  width: 276px;
  height: 276px;
  background-color: #303030eb;
  border-radius: 1rem;
  position: relative;
  padding-left: 22px;
  padding-right: 20px;
  padding-bottom: 18px;
  display: flex;
  align-items: end;
`;

const ClubCardName = styled.div`
  font-weight: 500;
  font-size: 3rem;
  line-height: 120%;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ClubCardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ClubCardType = styled.div`
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 160%;
`;

const Heart = styled.div`
  width: 22px;
  height: 20px;
  background-color: red;
`;

export default function central_clubs() {
  return (
    <>
      <ClubsBanner />
      <CardsContainer>
        <Grid container spacing={1} sx={{ marginTop: 0 }}>
          <Grid item xs={3}>
            <ClubCard>
              <ClubCardName>꾼</ClubCardName>
              <ClubCardFooter>
                <ClubCardType>평면예술/서예</ClubCardType>
                <Heart />
              </ClubCardFooter>
            </ClubCard>
          </Grid>
          <Grid item xs={3}>
            <ClubCard />
          </Grid>
          <Grid item xs={3}>
            <ClubCard />
          </Grid>
          <Grid item xs={3}>
            <ClubCard />
          </Grid>
        </Grid>
      </CardsContainer>
    </>
  );
}
