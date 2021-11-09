import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../components/Header";

describe("test header component", () => {
  it("should render component correctly", () => {
    const { debug } = render(<Header />);

    expect(screen.getByTestId("svg-medical")).toBeInTheDocument();

    expect(screen.getByAltText("profile")).toBeInTheDocument();
  });
});
