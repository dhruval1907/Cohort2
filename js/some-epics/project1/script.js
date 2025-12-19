var center = document.querySelector(".center");

const images = [
  "./le.jpg",
  "./something.png",
  "./image1.jpeg",
  "./image2.jpeg",
  "./image3.jpeg",
  "./image4.jpeg"
];

const throttleFunction = (func, delay) => {
  let prev = 0;

  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      func(...args);
    }
  };
};

center.addEventListener(
  "mousemove",
  throttleFunction((e) => {
    const div = document.createElement("div");
    div.classList.add("img-box");

    div.style.width = "200px";
    div.style.height = "270px";
    div.style.position = "absolute";
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";
    div.style.transform = "translate(-50%, -50%)";
    div.style.overflow = "hidden";
    div.style.zIndex = "10";

    const img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.transform = "translateY(100%)";

    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];

    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
      y: "0%",
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.to(img, {
      y: "100%",
      duration: 0.6,
      delay: 0.6,
      ease: "power2.in"
    });

    setTimeout(() => {
      div.remove();
    }, 1400);

  }, 500)
);
