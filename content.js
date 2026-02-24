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
