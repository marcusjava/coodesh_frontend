import React from "react";
import { Container } from "./styles/header";

import { FaHandHoldingMedical } from "react-icons/fa";

import { IconContext } from "react-icons";

// import { Container } from './styles';

function Header() {
  return (
    <Container>
      <IconContext.Provider
        value={{ style: { fontSize: "40px", color: "#40916c" } }}
      >
        <FaHandHoldingMedical data-testid="svg-medical" />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ style: { fontSize: "40px", color: "#40916c" } }}
      >
        <img
          src="https://randomuser.me/api/portraits/thumb/men/88.jpg"
          alt="profile"
          style={{ borderRadius: "50%", cursor: "pointer" }}
        />
      </IconContext.Provider>
    </Container>
  );
}

export default Header;
