function createHeader() {
  const header = document.createElement("section");
  header.id = "header";

  const logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "images/Frame 85.svg";
  logo.alt = "Logo";

  const navWrapper = document.createElement("div");
  navWrapper.className = "pos-navbar";

  const ul = document.createElement("ul");
  ul.id = "navbar";

  const links = [
    { text: "Replicas", href: "#catalog" },
    { text: "New", href: "#banner" },
    { text: "About us", href: "#about" },
  ];

  links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.className = "active";
    a.href = link.href;
    a.textContent = link.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  const cartLi = document.createElement("li");
  cartLi.id = "shopping-bag";

  const cartLink = document.createElement("a");
  cartLink.className = "active";
  cartLink.href = "#";

  const cartIcon = document.createElement("i");
  cartIcon.className = "fa-solid fa-cart-shopping";

  cartLink.appendChild(cartIcon);
  cartLi.appendChild(cartLink);
  ul.appendChild(cartLi);

  navWrapper.appendChild(ul);
  header.appendChild(logo);
  header.appendChild(navWrapper);

  return header;
}

document.body.prepend(createHeader());