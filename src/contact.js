function renderContact(content) {
  const section = document.createElement("section");
  section.classList.add("contact_section", "layout_padding");
  content.append(section);

  const container = document.createElement("div");
  container.classList.add("container");
  section.append(container);

  const heading = document.createElement("div");
  heading.classList.add("heading_container");
  container.append(heading);

  const headingH2 = document.createElement("h2");
  const headingSpan = document.createElement("span");
  headingSpan.textContent = "Request A Call Back";
  heading.append(headingH2);

  const body = document.createElement("div");
  body.classList.add("layout_padding");
  container.append(body);

  const row = document.createElement("div");
  row.classList.add("row");
  body.append(row);

  const col61 = document.createElement("div");
  col61.classList.add("col-md-6");
  row.append(col61);

  const form = document.createElement("div");
  form.setAttribute("action", "");
  col61.append(form);

  const formDiv = document.createElement("div");
  formDiv.classList.add("contact_form-container");
  form.append(formDiv);

  const formDiv2 = document.createElement("div");
  formDiv.append(formDiv2);

  const div1 = document.createElement("div");
  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "Name");
  div1.append(input1);
  formDiv2.append(div1);

  const div2 = document.createElement("div");
  const input2 = document.createElement("input");
  input2.setAttribute("type", "email");
  input2.setAttribute("placeholder", "Email");
  div2.append(input2);
  formDiv2.append(div2);

  const div3 = document.createElement("div");
  const input3 = document.createElement("input");
  input3.setAttribute("type", "text");
  input3.setAttribute("placeholder", "Phone Number");
  div3.append(input3);
  formDiv2.append(div3);

  const div4 = document.createElement("div");
  const input4 = document.createElement("input");
  input4.setAttribute("type", "text");
  input4.setAttribute("placeholder", "Message");
  div4.append(input4);
  formDiv2.append(div4);

  const div5 = document.createElement("div");
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "Send";
  div5.append(button);
  formDiv2.append(div5);

  const col62 = document.createElement("div");
  col62.classList.add("col-md-6");
  row.append(col62);

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map_container");
  col62.append(mapContainer);

  const mapDiv = document.createElement("div");
  mapDiv.classList.add("map-responsive");
  mapContainer.append(mapDiv);

  const mapIFrame = document.createElement("iframe");
  mapIFrame.setAttribute(
    "src",
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
  );
  mapIFrame.setAttribute("width", "600");
  mapIFrame.setAttribute("height", "300");
  mapIFrame.setAttribute("frameborder", "0");
  mapIFrame.setAttribute("style", "border:0; width: 100%; height:100%");
  mapIFrame.setAttribute("allowfullscreen", true);
  mapDiv.append(mapIFrame);
}

export default renderContact;
