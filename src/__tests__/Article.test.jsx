// Article.test.jsx
// Tests for Article component
// Wraps component in MemoryRouter because Article uses <Link>

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // ← ADD THIS
import "@testing-library/jest-dom";
import Article from "../components/Article";

describe("Article Component", () => {
  const mockArticle = {
    id: 1,                    // ← NEED id for Link
    title: "Test Article Title",
    date: "May 4, 2026",
    preview: "This is a preview of the article"
  };

  // Helper function to render with router
  const renderWithRouter = (component) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  test("renders a <article> element", () => {
    renderWithRouter(<Article {...mockArticle} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  test("renders a <h3> with the title of the post", () => {
    renderWithRouter(<Article {...mockArticle} />);
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
  });

  test("renders a <small> with the date of the post", () => {
    renderWithRouter(<Article {...mockArticle} />);
    expect(screen.getByText(mockArticle.date)).toBeInTheDocument();
  });

  test("uses a default value for the date if no date is passed as a prop", () => {
    renderWithRouter(
      <Article id={1} title="No Date" preview="Preview" />
    );
    expect(screen.getByText("January 1, 1970")).toBeInTheDocument();
  });

  test("renders a <p> with the preview text", () => {
    renderWithRouter(<Article {...mockArticle} />);
    expect(screen.getByText(mockArticle.preview)).toBeInTheDocument();
  });
});