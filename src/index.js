import iceCreamImage from "./slider-img.png";
import renderMenu from "./menu";
import renderContact from "./contact";
import "./style.css";
import "./bootstrap.css";
import "./responsive.css";

const CONTENT = document.getElementById("content");

function renderHomepage() {
  const section = document.createElement("section");
  section.classList.add("slider_section", "position-relative");
  CONTENT.append(section);

  const container = document.createElement("div");
  container.classList.add("container-fluid");
  section.append(container);

  const row = document.createElement("div");
  row.classList.add("row");
  container.append(row);

  const col4 = document.createElement("div");
  col4.classList.add("col-lg-4", "offset-lg-2", "col-md-5", "offset-md-1");

  const col6 = document.createElement("div");
  col6.classList.add("col-md-6");

  row.append(col4);
  row.append(col6);

  const detailBox = document.createElement("div");
  detailBox.classList.add("detail_box");
  col4.append(detailBox);

  const detailHeading = document.createElement("h1");
  detailHeading.innerHTML = `Ice <br />Cream <br />Shop`;

  const detailText = document.createElement("p");
  detailText.textContent = `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`;

  detailBox.append(detailHeading);
  detailBox.append(detailText);

  const imageBox = document.createElement("div");
  imageBox.classList.add("img-box");
  col6.append(imageBox);

  const image = document.createElement("img");
  image.src = iceCreamImage;
  imageBox.append(image);
}

renderHomepage();

document.getElementById("home").addEventListener("click", (e) => {
  CONTENT.innerHTML = "";
  setActiveItem(e.target.parentElement);
  renderHomepage();
});

document.getElementById("menu").addEventListener("click", (e) => {
  CONTENT.innerHTML = "";
  setActiveItem(e.target.parentElement);
  renderMenu(CONTENT);
});

document.getElementById("contact").addEventListener("click", (e) => {
  CONTENT.innerHTML = "";
  setActiveItem(e.target.parentElement);
  renderContact(CONTENT);
});

const setActiveItem = (current) => {
  const elements = document.querySelectorAll(".nav-item");
  elements.forEach((e) => {
    if (e !== current) {
      e.classList.remove("active");
    } else {
      e.classList.add("active");
    }
  });
};
