import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const ClubsBanner = styled.div`
  width: 100vw;
  height: 378px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  margin-top: 5.25rem;
`;

const Category = styled.button`
  height: 44px;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #303030eb;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  background-color: transparent;
  color: whitesmoke;
`;

const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  const TEMP_ROW = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      <ClubsBanner />
      <CategoryContainer>
        <Category>전체</Category>
        <Category>평면예술</Category>
        <Category>연행예술</Category>
        <Category>봉사</Category>
        <Category>취미교양</Category>
        <Category>스포츠</Category>
        <Category>종교</Category>
        <Category>학술</Category>
        <Category>인문사회</Category>
      </CategoryContainer>
      <CardsContainer>
        <Grid container spacing={4} sx={{ marginTop: 0 }}>
          {TEMP_ROW.map((e) => (
            <Grid item xs={3}>
              <ClubCard>
                <ClubCardName>꾼</ClubCardName>
                <ClubCardFooter>
                  <ClubCardType>평면예술/서예</ClubCardType>
                  <Heart />
                </ClubCardFooter>
              </ClubCard>
            </Grid>
          ))}
        </Grid>
      </CardsContainer>
    </>
  );
}
