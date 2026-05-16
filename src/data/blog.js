// src/data/blog.js

const blog = {
  name: "Rahab's Tech Blog",
  image:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  about:
    "Welcome to my personal tech blog where I share coding tutorials, React projects, and web development tips.",
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "May 16, 2026",
      preview:
        "React makes it easy to build interactive user interfaces using reusable components."
    },
    {
      id: 2,
      title: "Why Developers Love JavaScript",
      date: "May 10, 2026",
      preview:
        "JavaScript powers modern web applications and continues to evolve every year."
    },
    {
      id: 3,
      title: "Understanding Props in React",
      date: "May 5, 2026",
      preview:
        "Props help components communicate with each other and make applications dynamic."
    }
  ]
};

export default blog;