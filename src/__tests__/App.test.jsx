
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
  test("renders blog name in header", () => {
    render(<App />);
    expect(screen.getByText("Underreacted")).toBeInTheDocument();  // ← CHANGED
  });
});