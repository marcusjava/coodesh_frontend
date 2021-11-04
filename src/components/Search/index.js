import React from "react";
import { Input } from "reactstrap";

import { Container } from "./styles/search";

function Search({ searchPacients }) {
  return (
    <Container>
      <Input
        size="lg"
        placeholder="Pesquisar paciente"
        onChange={(e) => searchPacients(e.target.value)}
      />
    </Container>
  );
}

export default Search;
