import styled from "styled-components/macro";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled.img`
  position: absolute;
  top: -150px;
  height: 250px;
  border-radius: 50%;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
