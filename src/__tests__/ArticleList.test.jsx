// ArticleList.test.jsx
// Tests for ArticleList component
// Wraps component in MemoryRouter because ArticleList renders Articles with <Link>

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // ← ADD THIS
import "@testing-library/jest-dom";
import ArticleList from "../components/ArticleList";

describe("ArticleList Component", () => {
  const mockPosts = [
    {
      id: 1,
      title: "First Post",
      date: "May 1, 2026",
      preview: "Preview one"
    },
    {
      id: 2,
      title: "Second Post",
      date: "May 2, 2026",
      preview: "Preview two"
    }
  ];

  // Helper function to render with router
  const renderWithRouter = (component) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  test("renders a <main> element", () => {
    const { container } = renderWithRouter(<ArticleList posts={mockPosts} />);
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  test("renders a Article component for each post passed as a prop", () => {
    renderWithRouter(<ArticleList posts={mockPosts} />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(2);
  });
});