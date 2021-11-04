import styled, { css } from "styled-components";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationItem = styled.button`
  background: #fff;
  border: 2px solid #666;
  padding: 10px 15px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  position: relative;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #40916c;
  }
  ${({ currentPage, item }) =>
    currentPage === item
      ? css`
          border: 1px solid #888;
          color: #888;
          pointer-events: none;
        `
      : null}
`;

export const Item = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  background: #fff;
  border: none;
  padding: 10px;
  color: blue;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  margin: 0 10px;
  cursor: pointer;
`;

export const GoToPrevious = styled(Button)`
  ${({ currentPage }) =>
    currentPage === 1 &&
    css`
      pointer-events: none;
      box-shadow: none;
      color: #999;
    `}
`;

export const GoToNext = styled(Button)`
  ${({ currentPage, pages }) =>
    currentPage === pages &&
    css`
      pointer-events: none;
      box-shadow: none;
      color: #999;
    `}
`;
