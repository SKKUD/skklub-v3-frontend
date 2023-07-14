import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { usePathname, useRouter } from "next/navigation";
import useClubLike from "@/hooks/useClubLike";

const CustomCard = styled.div`
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
  @media (max-width: 930px) {
    width: 163px;
    height: 163px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CardTitle = styled.div`
  font-weight: 500;
  font-size: 3rem;
  line-height: 120%;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const CardType = styled.div`
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 160%;
`;

const Heart = styled.div`
  width: 22px;
  height: 20px;
  color: ${(props) => (props.isLiked ? "#da5d65" : "#b7b7b7")};
  transition: color 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

export default function ClubCard({ club }) {
  const router = useRouter();
  const pathname = usePathname();
  const [likedClubs, modifyLikedClubs] = useClubLike();

  const [_, location, a] = pathname.split("/");

  const handleCardClick = (clubId) => {
    router.push(`/${location}/${clubId}`);
  };

  const handleHeartClick = (event, clubName) => {
    event.stopPropagation();
    if (likedClubs.includes(clubName)) {
      const newLikedClubs = likedClubs.filter((item) => item !== clubName);
      modifyLikedClubs(newLikedClubs);
    } else {
      const newLikedClubs = [...likedClubs, clubName];
      modifyLikedClubs(newLikedClubs);
    }
  };

  return (
    <CustomCard key={club.name} onClick={() => handleCardClick(club.clubId)}>
      <CardTitle>{club.name}</CardTitle>
      <CardFooter>
        <CardType>{`${club.belongs}/${club.briefActivityDescription}`}</CardType>
        <Heart
          isLiked={likedClubs.includes(club.name)}
          onClick={(event) => handleHeartClick(event, club.name)}
        >
          <FavoriteIcon />
        </Heart>
      </CardFooter>
    </CustomCard>
  );
}
