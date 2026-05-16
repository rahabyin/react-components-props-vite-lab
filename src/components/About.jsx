// src/components/About.jsx

// About Component
// Displays blog information and image
// Connected To:
// - App.jsx

function About({
  image = "https://via.placeholder.com/215",
  about
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />

      <p>{about}</p>
    </aside>
  );
}

export default About;