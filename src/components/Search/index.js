import React from "react";
import { Input } from "reactstrap";
import { usePacient } from "../../context/pacient";

import { Container } from "./styles/search";

function Search() {
  const { searchPacients } = usePacient();
  return (
    <Container>
      <Input
        size="lg"
        placeholder="Pesquisar paciente"
        onChange={(e) => searchPacients(e.target.value)}
        data-testid="input_search"
      />
    </Container>
  );
}

export default Search;
