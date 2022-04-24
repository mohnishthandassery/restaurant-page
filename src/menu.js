import image1 from "./ice-1.png";
import image2 from "./ice-2.png";
import image3 from "./ice-3.png";

const items = [
  {
    src: image1,
    name: "Coffee Ice Cream",
    description:
      "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    src: image2,
    name: "Mix Ice Cream",
    description:
      "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    src: image3,
    name: "Fruit Ice Cream",
    description:
      "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

function renderMenu(content) {
  const section = document.createElement("section");
  section.classList.add("our_section", "layout_padding");
  content.append(section);

  const container = document.createElement("div");
  container.classList.add("container");
  section.append(container);

  const heading = document.createElement("div");
  heading.classList.add("heading_container");
  container.append(heading);

  const headingH2 = document.createElement("h2");
  const headingSpan = document.createElement("span");
  headingSpan.textContent = "Our ice cream";
  heading.append(headingH2);
  headingH2.append(headingSpan);

  const body = document.createElement("div");
  body.classList.add("our_container");
  container.append(body);

  items.forEach((item) => {
    const element = createIceCreamBox(item);
    body.append(element);
  });
}

function createIceCreamBox(params) {
  const box = document.createElement("div");
  box.classList.add("box");

  const imageBox = document.createElement("div");
  imageBox.classList.add("img-box");
  box.append(imageBox);

  const image = document.createElement("img");
  image.src = params.src;
  imageBox.append(image);
  box.append(imageBox);

  const detailBox = document.createElement("div");
  detailBox.classList.add("detail-box");
  box.append(detailBox);

  const detailHeading = document.createElement("h5");
  detailHeading.innerHTML = params.name;

  const detailText = document.createElement("p");
  detailText.textContent = params.description;

  detailBox.append(detailHeading);
  detailBox.append(detailText);

  return box;
}

export default renderMenu;
