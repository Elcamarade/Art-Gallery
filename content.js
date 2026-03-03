fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    function createHeader(data) {
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

      data.headerLinks.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "active";
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
      });

      navWrapper.appendChild(ul);
      header.appendChild(logo);
      header.appendChild(navWrapper);

      return header;
    }

    function createHero(data) {
      const hero = document.createElement("section");
      hero.id = "hero";

      const bird = document.createElement("img");
      bird.src = data.hero.birdImage;
      bird.alt = "Bird";
      bird.className = "hero-bird";

      const heroBox = document.createElement("div");
      heroBox.className = "hero-box";

      const h1 = document.createElement("h1");
      h1.textContent = data.title;

      const p = document.createElement("p");
      p.textContent = data.hero.subtitle;

      const button = document.createElement("button");
      button.textContent = data.hero.buttonText;

      heroBox.appendChild(h1);
      heroBox.appendChild(p);
      heroBox.appendChild(button);

      hero.appendChild(bird);
      hero.appendChild(heroBox);

      return hero;
    }

    function addImages(data) {
      const heroImagesContainer = document.getElementById("hero-images");
      if (!heroImagesContainer) return;

      data.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        heroImagesContainer.appendChild(img);
      });
    }

    document.body.prepend(createHeader(data));
    document.body.insertBefore(
      createHero(data),
      document.getElementById("catalog"),
    );

    addImages(data);
  });

function creeazaSearchLiveGlobal() {
  const toatePozele = [...france, ...england, ...germany];

  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Caută o poză după titlu...";
  input.className = "search-input";

  const rezultatDiv = document.createElement("div");
  rezultatDiv.className = "search-results";

  document.body.appendChild(input);
  document.body.appendChild(rezultatDiv);

  const istoricInitial = JSON.parse(localStorage.getItem("istoricCautari")) || [];

  if (istoricInitial.length > 0) {
    input.value = istoricInitial[istoricInitial.length - 1];
  }

  function salveazaCautare(termen) {
    let istoric = JSON.parse(localStorage.getItem("istoricCautari")) || [];

    if (termen.trim() !== "" && !istoric.includes(termen)) {
      istoric.push(termen);
      localStorage.setItem("istoricCautari", JSON.stringify(istoric));
    }
  }

  function cautaLive() {
    const termen = input.value.toLowerCase();
    rezultatDiv.innerHTML = "";

    const gasite = toatePozele.filter((poze) =>
      poze.title.toLowerCase().includes(termen)
    );

    if (gasite.length > 0) {
      gasite.forEach((poze) => {
        const container = document.createElement("div");
        container.className = "result-card";

        const img = document.createElement("img");
        img.src = poze.img;
        img.alt = poze.title;
        img.className = "result-img";

        const info = document.createElement("p");
        info.textContent = `${poze.title} - ${poze.price}`;

        container.appendChild(img);
        container.appendChild(info);
        rezultatDiv.appendChild(container);
      });
    } else {
      rezultatDiv.textContent = "Nu am găsit nicio poză.";
    }
  }

  input.addEventListener("input", cautaLive);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      salveazaCautare(input.value.toLowerCase());
    }
  });

  if (istoricInitial.length > 0) {
    cautaLive();
  }
}

creeazaSearchLiveGlobal();