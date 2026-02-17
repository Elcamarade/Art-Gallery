const data = {
  headerLinks: [
    { text: "Replicas", href: "#catalog" },
    { text: "New", href: "#banner" },
    { text: "About us", href: "#about" },
  ],
  title: "Replicas of Paintings from Ink. House",
  hero: {
    subtitle: "High-quality renderings on thick paper or linen canvas. Rare works, affordable prices.",
    buttonText: "Products",
    birdImage: "images/Layer 0 1.svg",
  },
  images: [
    "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2114.jpg",
    "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
    "https://images.dog.ceo/breeds/shihtzu/n02086240_1170.jpg",
    "https://images.dog.ceo/breeds/affenpinscher/n02110627_8621.jpg",
    "https://images.dog.ceo/breeds/terrier-scottish/n02097298_6383.jpg",
  ]
};

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
  data.headerLinks.forEach(link => {
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

function createHero() {
  const hero = document.createElement("section");
  hero.id = "hero";
  const bird = document.createElement("img");
  bird.src = data.hero.birdImage;
  bird.alt = "Bird";
  bird.className = "hero-bird";
  const heroBox = document.createElement("div");
  heroBox.className = "hero-box";
  const h1 = document.createElement("h1");
  h1.innerHTML = data.title;
  const p = document.createElement("p");
  p.innerHTML = data.hero.subtitle;
  const button = document.createElement("button");
  button.textContent = data.hero.buttonText;
  heroBox.appendChild(h1);
  heroBox.appendChild(p);
  heroBox.appendChild(button);
  hero.appendChild(bird);
  hero.appendChild(heroBox);
  return hero;
}

document.body.insertBefore(createHero(), document.getElementById("catalog"));

function addImages() {
  const heroImagesContainer = document.getElementById("hero-images");
  if (!heroImagesContainer) return;
  data.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    heroImagesContainer.appendChild(img);
  });
}

addImages();
