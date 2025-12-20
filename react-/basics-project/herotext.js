const herotext = () => {
  return React.createElement(
    "div",
    { className: "hero-text" },
    [
      React.createElement("p", { key: 1 }, "+200 Projects completed"),
      React.createElement("p", { key: 2 }, "+50 Startup raised"),
      React.createElement("h1", { key: 3 }, "Hello"),
      React.createElement(
        "p",
        { key: 4 },
        "— It’s D.Nova, a design wizard"
      )
    ]
  );
};

export default herotext;
