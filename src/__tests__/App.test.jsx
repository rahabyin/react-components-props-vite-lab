// src/tests/App.test.jsx

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders blog title", () => {
  render(<App />);

  const heading = screen.getByText(/Rahab's Tech Blog/i);

  expect(heading).toBeInTheDocument();
});