const france = [
    {
      img: "images/03.svg",
      author: "Marcel Rousseau",
      title: "Amur's Hunt",
      material: "Canvas, oil (50x80)",
      price: "800$",
    },
    {
      img: "images/04.svg",
      author: "Henry Celin",
      title: "The Lady with the Dog",
      material: "Acrylic, paper (50x80)",
      price: "1300$",
    },
    {
      img: "images/05.svg",
      author: "Françoise Dupont",
      title: "Procedure",
      material: "Color lithograph (40x60)",
      price: "4500$",
    },
    {
      img: "images/06.svg",
      author: "Lui Detush",
      title: "Rose",
      material: "Acrylic, paper (50x80)",
      price: "1350$",
    },
    {
      img: "images/07.svg",
      author: "Françoise Dupont",
      title: "Bird's meal",
      material: "Color lithograph (40x60)",
      price: "5000$",
    },
    {
      img: "images/08.svg",
      author: "Pier Moranj",
      title: "Landscape with fish",
      material: "Color lithograph (40x60)",
      price: "760$",
    },
  ];

  const england = [
    {
      img: "images/eng1.svg",
      author: "John Milton",
      title: "Misty Morning",
      material: "Oil on canvas (50x70)",
      price: "2100$",
    },
    {
      img: "images/eng2.svg",
      author: "Emily Watson",
      title: "Tea Time",
      material: "Watercolor (40x60)",
      price: "1800$",
    },
    {
      img: "images/eng3.svg",
      author: "Arthur Blake",
      title: "Countryside View",
      material: "Canvas, oil (60x80)",
      price: "2700$",
    },
    {
      img: "images/eng4.svg",
      author: "Helen Moore",
      title: "Coastal Walk",
      material: "Acrylic, paper (50x80)",
      price: "1950$",
    },
    {
      img: "images/eng5.svg",
      author: "George Finn",
      title: "Afternoon Sky",
      material: "Color lithograph (40x60)",
      price: "3000$",
    },
    {
      img: "images/eng6.svg",
      author: "Mary Harris",
      title: "At the Lake",
      material: "Oil on canvas (40x60)",
      price: "3500$",
    },
  ];



  // 🔹 Selectăm butoanele
  const buttons = document.querySelectorAll(".catalog-bar button");
  const containerUp = document.querySelector(".container-up");
  const containerDown = document.querySelector(".container-down");

  // 🔹 Funcție care afișează lucrările
  function renderCountry(data) {
    // curățăm ambele containere
    containerUp.innerHTML = "";
    containerDown.innerHTML = "";

    // primele 3 merg sus, restul jos
    data.forEach((item, index) => {
      const box = `
        <div class="catalog-box">
          <img src="${item.img}" alt="${item.title}" />
          <p>${item.author}</p>
          <h3>${item.title}</h3>
          <span>${item.material}</span>
          <h4>${item.price}</h4>
          <button>Add to cart</button>
        </div>
      `;
      if (index < 3) {
        containerUp.innerHTML += box;
      } else {
        containerDown.innerHTML += box;
      }
    });
  }

  // 🔹 Evenimente pentru butoane
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => (b.style.background = "white"));
      btn.style.background = "rgba(212, 232, 217, 1)";

      const country = btn.textContent.trim();
      if (country === "France") renderCountry(france);
      if (country === "England") renderCountry(england);
      if (country === "Germany") renderCountry(germany);
    });
  });

  // 🔹 Afișează implicit Franța
  renderCountry(france);