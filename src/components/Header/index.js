import React from "react";
import { Container } from "./styles/header";
import { GiMedicalPackAlt } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

// import { Container } from './styles';

function Header() {
  return (
    <Container>
      <IconContext.Provider
        value={{ style: { fontSize: "50px", color: "#40916c" } }}
      >
        <GiMedicalPackAlt />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ style: { fontSize: "40px", color: "#40916c" } }}
      >
        <FaRegUserCircle />
      </IconContext.Provider>
    </Container>
  );
}

export default Header;
