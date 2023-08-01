import useClubLike from "@/hooks/useClubLike";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Heart = styled.div`
  width: 24px;
  height: 24px;
  color: ${(props) => (props.isLiked ? "#da5d65" : "#b7b7b7")};
  transition: color 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

export default function ClubCardHeart({ clubName }) {
  const [likedClubs, addClubToList, deleteClubInList] = useClubLike();

  const handleHeartClick = (event, clubName) => {
    event.stopPropagation();

    if (likedClubs.includes(clubName)) {
      deleteClubInList(clubName);
    } else {
      addClubToList(clubName);
    }
  };
  return (
    <Heart
      isLiked={likedClubs.includes(clubName)}
      onClick={(event) => handleHeartClick(event, clubName)}
    >
      <FavoriteIcon />
    </Heart>
  );
}
