"use client";

import { useState, useEffect, useRef } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import useURLParse from "@/hooks/useURLParse";

const SearchbarWrap = styled.div`
  /* position: sticky;
  top: 70px;
  width: 70%;
  min-height: 70px;
  margin: 0px auto;
  margin-top: -70px;
  background-color: #151717;
  z-index: 50;
  padding: 0 30px; */
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  min-height: 70px;
  background-color: #151717;
  z-index: 50;
  padding: 0 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    top: 80px;
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  height: 60px;
  .MuiInputBase-input {
    height: 1.5em;
    line-height: 1.5em;
    font-size: 1.2rem;
  }

  &::after {
    border-bottom: 2px solid
      ${(props) =>
        props.campus
          ? props.theme.palette.primary.main
          : props.theme.palette.secondary.main};
  }
`;

const SuggestionBox = styled.div`
  background-color: #151717;
  position: sticky;
  top: 140px;
  width: 100%;
  height: auto;
  max-height: 300px;
  overflow: scroll;
  margin: 0px auto;
  padding: 10px;
  z-index: 60;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    top: 150px;
    width: 100%;
  }
`;

export default function Searchbar({ setIsSearchVisible }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const newSuggestions = getSuggestions(value);
    setSuggestions(newSuggestions);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const suggestions = [
      "사과",
      "바나나",
      "오렌지",
      "포도",
      "수박",
      "딸기",
      "파인애플",
    ];

    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    return filteredSuggestions;
  };

  const outside = useRef();
  const closeSearchbar = () => {
    setIsSearchVisible(false);
  };

  const { isSuwon } = useURLParse();
  console.log(isSuwon);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  });

  const handleOutside = (e) => {
    if (!outside.current.contains(e.target)) {
      closeSearchbar();
    }
  };

  return (
    <SearchbarWrap ref={outside}>
      <StyledInput
        campus={isSuwon}
        fullWidth
        placeholder="동아리를 입력하세요."
        value={searchTerm}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility">
              <SearchIcon sx={{ fontSize: "34px" }} />
            </IconButton>
          </InputAdornment>
        }
      />
      <SuggestionBox>
        <List component="div" aria-label="suggestion">
          {suggestions.map((suggestion) => (
            <ListItemButton
              key={suggestion}
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              <ListItemText primary={suggestion} />
            </ListItemButton>
          ))}
        </List>
      </SuggestionBox>
    </SearchbarWrap>
  );
}
