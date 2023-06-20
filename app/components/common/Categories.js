"use client";
import { testState } from "@/utils/atoms";
import { CATEGORIES } from "@/utils/constants";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

const CategoryWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  margin-top: 5.25rem;
  overflow-x: auto;
  gap: 8px;
`;

const Category = styled.button`
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #303030;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  background-color: transparent;
  &:nth-child(3n) {
    color: rgba(255, 149, 89, 1);
  }
  &:nth-child(3n + 1) {
    color: rgba(252, 123, 149, 1);
  }
  &:nth-child(3n + 2) {
    color: rgba(128, 164, 255, 1);
  }
  &:first-child {
    color: rgba(255, 255, 255, 1);
  }
  &:hover {
    cursor: pointer;
    background-color: #303030eb;
  }

  white-space: nowrap;

  @media (max-width: 1024px) {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 17px;
    padding: 8px 25px;
  }
`;

export default function Categories() {
  const [test, useTest] = useRecoilState(testState);

  const onCategoryClick = () => {
    useTest("2");
  };
  return (
    <CategoryWrapper>
      {CATEGORIES.map((category) => (
        <Category key={category} onClick={onCategoryClick}>
          {category}
        </Category>
      ))}
    </CategoryWrapper>
  );
}
