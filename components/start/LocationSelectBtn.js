import styled from "@emotion/styled";

const LocationBtn = styled.button`
  border: none;
  color: #434c4f;
  width: 100%;
  background-color: white;
  font-size: 1.5rem;
  height: 68px;
  border-radius: 3rem;
  font-weight: 900;

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
  handleClick,
}) {
  return (
    <LocationBtn hoverColor={hoverColor} onClick={handleClick}>
      {label}
    </LocationBtn>
  );
}

// LocationSelectBtn.propTypes = {
//   PropT
// }
