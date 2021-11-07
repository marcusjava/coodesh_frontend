import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-bottom: 30px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: #c3cfd9;
  font-size: 20px;
`;

export const TFoot = styled.tfoot``;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  text-align: center;
`;

export const TH = styled.th`
  padding: 17px 0;
`;

export const TD = styled.td`
  padding: 10px;
`;

export const ActionButton = styled(Link)`
  padding: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #40916c;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Thumbnail = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;
