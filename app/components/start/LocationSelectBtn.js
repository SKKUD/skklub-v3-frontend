import useLocationPush from "../../../hooks/useLocationPush";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const LocationBtn = styled.button`
  border: none;
  color: #434c4f;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.text.primary};
  height: 68px;
  border-radius: 5px;
  text-align: center;
  font-family: GmarketSansBold;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 300px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 115px;
    font-size: 1.25rem;
    height: 40px;
    padding: 0;
    margin-bottom: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: white;
  }
`;

export default function LocationSelectBtn({
  label,
  hoverColor = "#80A4FF",
  nextLocation,
}) {
  const pushToNextLocation = useLocationPush(nextLocation);
  return (
    <LocationBtn hoverColor={hoverColor} onClick={() => console.log("hi")}>
      {label}
    </LocationBtn>
  );
}

LocationSelectBtn.propTypes = {
  label: PropTypes.string,
  hoverColor: PropTypes.string,
  nextLocation: PropTypes.string,
};
