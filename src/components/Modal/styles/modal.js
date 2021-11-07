import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #40916c;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Container = styled.div`
  min-height: 550px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  position: absolute;
  top: -150px;
  height: 250px;
  border-radius: 50%;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 40px 0;
`;

export const LinkButton = styled(Link)`
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #7b7c7c;
  }
`;
