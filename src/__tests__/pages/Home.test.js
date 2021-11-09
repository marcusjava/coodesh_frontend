import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { PacientContext } from "../../context/pacient";
import Home from "../../pages/Home";
import { fakePacientsList } from "../../fakePacients";

const renderWithProvider = () => {
  return render(
    <BrowserRouter>
      <PacientContext.Provider
        value={{
          pacients: fakePacientsList,
          search: [],
        }}
      >
        <Home />
      </PacientContext.Provider>
    </BrowserRouter>
  );
};

describe("Home Page tests", () => {
  it("should renders the home correctly", () => {
    const { debug } = renderWithProvider();

    expect(screen.getByTestId("input_search")).toBeInTheDocument();
    expect(screen.getByTestId("table_pacients")).toBeInTheDocument();
    expect(screen.getByText(/Nome/i).textContent).toEqual("Nome");
    expect(screen.getByText(/Acilino/i).textContent).toEqual("Acilino da Luz");
  });
});
