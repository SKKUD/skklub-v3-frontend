import useURLParse from "@/hooks/useURLParse";
import { categoryState } from "@/utils/atoms";
import { CATEGORIES_SEOUL, CATEGORIES_SUWON } from "@/utils/constants";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

const CategoryWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  margin-top: 5.25rem;
  overflow-x: auto;
  gap: 20px;
`;

const Category = styled.button`
  width: 102px;
  height: 39px;
  padding: 10px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 99px;
  background-color: ${(props) => (props.isClicked ? "#FFF" : "#2A3133")};
  overflow: hidden;
  color: ${(props) => (props.isClicked ? "#151717" : "#FFF")};
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: #303030eb;
    color: #fff;
  }

  @media (max-width: 1024px) {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 17px;
    padding: 8px 25px;
  }
`;

export default function Categories() {
  const [category, setCategory] = useRecoilState(categoryState);
  const { isSuwon } = useURLParse();
  const onCategoryClick = (clickedCategory) => {
    setCategory(clickedCategory);
  };

  return (
    <CategoryWrapper>
      {(isSuwon ? CATEGORIES_SUWON : CATEGORIES_SEOUL).map((c) => (
        <Category
          key={c}
          isClicked={category === c}
          onClick={() => onCategoryClick(c)}
        >
          {c}
        </Category>
      ))}
    </CategoryWrapper>
  );
}
