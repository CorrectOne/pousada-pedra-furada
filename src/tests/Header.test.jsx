import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header"; // ajuste o caminho se necessário

describe("Header", () => {
  test("deve renderizar o título da pousada", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Pousada Pedra Furada")).toBeInTheDocument();
  });
});
