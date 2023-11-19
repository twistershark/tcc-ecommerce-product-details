import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Button } from ".";

describe("Button", () => {
  it("should render the component correctly", () => {
    const nameMock = "Adicionar ao carrinho";

    render(
      <MemoryRouter>
        <Button>{nameMock}</Button>
      </MemoryRouter>
    );

    expect(screen.getByText(nameMock)).toBeInTheDocument();
  });
});
