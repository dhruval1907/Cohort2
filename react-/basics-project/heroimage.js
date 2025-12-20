const heroimage = () => {
  return React.createElement(
    "div",
    { className: "hero-image" },
    React.createElement("img", {
      src: "./profile.jpg",
      alt: "profile"
    })
  );
};

export default heroimage;
