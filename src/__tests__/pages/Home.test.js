import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router, Route, Switch } from "react-router-dom";
import { PacientContext } from "../../context/pacient";
import Home from "../../pages/Home";
import { createMemoryHistory } from "history";

import { fakePacientsList } from "../../fakePacients";
import Detail from "../../pages/Detail";

const renderWithProvider = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(
      <Router history={history}>
        <PacientContext.Provider
          value={{
            pacients: fakePacientsList,
            search: [],
          }}
        >
          {ui}
        </PacientContext.Provider>
      </Router>
    ),
    history,
  };
};

describe("Home Page tests", () => {
  it("should renders the home correctly", () => {
    const { debug } = renderWithProvider(<Home />);

    expect(screen.getByTestId("input_search")).toBeInTheDocument();
    expect(screen.getByTestId("table_pacients")).toBeInTheDocument();
    expect(screen.getByText(/Nome/i).textContent).toEqual("Nome");
    expect(screen.getByText(/Acilino/i).textContent).toEqual("Acilino da Luz");
  });
  it("should redirect to detail when click on action table button", () => {
    const { debug } = renderWithProvider(
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id">
          <Detail />
        </Route>
      </Switch>,
      {
        route: "/",
      }
    );

    const detailButton = screen.getAllByTestId("detail_button")[0];
    userEvent.click(detailButton);
    expect(screen.getByText(/Acilino/)).toBeInTheDocument();
    expect(screen.getByText(/ID/)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
    expect(screen.getByText(/endereço/i)).toBeInTheDocument();
    expect(screen.getByText(/nacionalidade/i)).toBeInTheDocument();
    expect(screen.getByText(/sexo/i)).toBeInTheDocument();
    expect(screen.getByText(/idade/)).toBeInTheDocument();
    debug();
  });
});
