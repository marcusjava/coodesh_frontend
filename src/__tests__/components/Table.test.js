import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { PacientContext } from "../../context/pacient";
import Table from "../../components/Table";
import { fakePacientsList } from "../../fakePacients";

const renderWithProvider = (list, order = "asc") => {
  return render(
    <BrowserRouter>
      <PacientContext.Provider
        value={{
          sort: order,
          sortPacientNames: jest.fn(),
        }}
      >
        <Table data={list} />
      </PacientContext.Provider>
    </BrowserRouter>
  );
};

describe("testing table component", () => {
  it("should table render correctly", () => {
    renderWithProvider(fakePacientsList);

    expect(screen.getByTestId("table_pacients")).toBeInTheDocument();
    expect(screen.getByText(/ver todos/i).textContent).toEqual("Ver Todos");
    //checking header
    const header = screen.getByText(/nome/i).closest("tr");
    const headerData = within(header);
    expect(headerData.getByText(/foto/i)).toBeInTheDocument();
    expect(headerData.getByText(/nome/i)).toBeInTheDocument();
    expect(headerData.getByTestId("asc")).toBeInTheDocument();
    expect(headerData.getByText(/genero/i)).toBeInTheDocument();
    expect(headerData.getByText(/ver todos/i)).toBeInTheDocument();
    expect(headerData.getByText(/nasc/i)).toBeInTheDocument();
    expect(headerData.getByText(/Idade/)).toBeInTheDocument();
    expect(headerData.getByText(/nacionalidade/i)).toBeInTheDocument();
    expect(headerData.getByText(/ações/i)).toBeInTheDocument();
    const row = screen.getByText(/acilino/i).closest("tr");
    const rowData = within(row);
    //checking row data
    expect(rowData.getByText(/acilino/i).textContent).toEqual("Acilino da Luz");
    expect(rowData.getByText(/masculino/i).textContent).toEqual("Masculino");
    expect(rowData.getByText("05/02/1963").textContent).toEqual("05/02/1963");
    expect(rowData.getByText("58").textContent).toEqual("58");
    expect(rowData.getByText(/br/i).textContent).toEqual("BR");
    expect(rowData.getByTestId("modal")).toBeInTheDocument();
    expect(rowData.getByTestId("detail_button")).toBeInTheDocument();
  });

  it("should render no results when list is empty", async () => {
    renderWithProvider([]);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();

    expect(screen.getByText(/sem resultados/i).textContent).toEqual(
      "Sem resultados"
    );
  });

  it("should show modal when clicking on detail button", () => {
    renderWithProvider(fakePacientsList);

    const button = screen.getAllByTestId("detail_button")[0];

    userEvent.click(button);

    const modal = screen.getAllByTestId("modal")[0];

    expect(modal).toBeInTheDocument();
  });

  it("should render asc order button initially", () => {
    renderWithProvider(fakePacientsList);

    const ascButton = screen.getByTestId("asc");
    const descButton = screen.queryByTestId("desc");
    expect(ascButton).toBeInTheDocument();
    expect(descButton).not.toBeInTheDocument();
    userEvent.click(ascButton);
  });
  it("should render desc order button", () => {
    renderWithProvider(fakePacientsList, "desc");

    const ascButton = screen.queryByTestId("asc");
    const descButton = screen.getByTestId("desc");
    expect(ascButton).not.toBeInTheDocument();
    expect(descButton).toBeInTheDocument();
    userEvent.click(descButton);
  });
  it("redirect to detail page when click on actions detail button", () => {
    const { debug } = renderWithProvider(fakePacientsList);
    const detailButton = screen.getAllByTestId("detail_button")[0];
    expect(detailButton).toBeInTheDocument();
    userEvent.click(detailButton);
  });
});
