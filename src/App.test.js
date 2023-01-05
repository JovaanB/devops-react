import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders With Github Actions paragraph", () => {
  render(<App />);
  const pElement = screen.getByText(/With Github Actions/i);
  expect(pElement).toBeInTheDocument();
});
