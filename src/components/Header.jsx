// src/components/Header.jsx

// Header Component
// Purpose:
// Displays the blog title.
//
// Connected To:
// - App.jsx

function Header({ name }) {
  return (
    <header className="header">
      <h1>{name}</h1>
    </header>
  );
}

export default Header;