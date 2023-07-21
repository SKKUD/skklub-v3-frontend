import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledRadioGroup = styled(RadioGroup)`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

const StyledRadioBtn = styled(Radio)`
  &.Mui-checked {
    color: #fff;
  }
`;

export default function NoticeRadioBtns() {
  const [value, setValue] = useState("all");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <StyledRadioGroup row value={value} onChange={handleChange}>
        <FormControlLabel
          value="all"
          control={<StyledRadioBtn size="small" />}
          label="전체"
        />
        <FormControlLabel
          value="seoul"
          control={<StyledRadioBtn size="small" />}
          label="명륜 동아리"
        />
        <FormControlLabel
          value="suwon"
          control={<StyledRadioBtn size="small" />}
          label="율전 동아리"
        />
      </StyledRadioGroup>
    </FormControl>
  );
}
