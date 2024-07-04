const lemonadeGallery = [
    {
      title: "Strawberry Lemonade",
      imageUrl: "../project/img/strawbery.webp",
      likes: 0,
    },
    {
      title: "Classic Lemonade",
      imageUrl: "../project/img/classic-lemonade.webp",
      likes: 0,
    },
    {
      title: "Mango Smoothie",
      imageUrl: "../project/img/classic-lemonade.webp",
      likes: 0,
    },
  ];

  function createLemonadeGalleryElements(container, lemonadeGallery) {
    lemonadeGallery.forEach((product, index) => {
      const productElement = document.createElement("div");
      productElement.classList.add("lemonade-product");

      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", product.imageUrl);
      imageElement.setAttribute("alt", `${product.title}`);
      imageElement.setAttribute("loading", "lazy");

      const titleElement = document.createElement("h2");
      titleElement.textContent = product.title;

      const likesElement = document.createElement("div");
      likesElement.classList.add("likes");
      likesElement.textContent = `Likes: ${product.likes}`;

      const likeButton = document.createElement("button");
      likeButton.classList.add("like-btn");
      likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i> Like';
      likeButton.addEventListener("click", () => {
        product.likes++;
        likesElement.textContent = `Likes: ${product.likes}`;
        saveToLocalStorage(index, "likes", product.likes);
      });

      productElement.appendChild(imageElement);
      productElement.appendChild(titleElement);
      productElement.appendChild(likesElement);
      productElement.appendChild(likeButton);

      container.appendChild(productElement);
    });
  }

  const lemonadeGalleryContainer = document.getElementById("lemonade-gallery");

  loadFromLocalStorage();
  createLemonadeGalleryElements(lemonadeGalleryContainer, lemonadeGallery);

  function saveToLocalStorage(index, key, value) {
    let gallery = JSON.parse(localStorage.getItem("lemonadeGallery")) || lemonadeGallery;
    gallery[index][key] = value;
    localStorage.setItem("lemonadeGallery", JSON.stringify(gallery));
  }

  function loadFromLocalStorage() {
    const gallery = JSON.parse(localStorage.getItem("lemonadeGallery"));
    if (gallery) {
      gallery.forEach((product, index) => {
        lemonadeGallery[index].likes = product.likes;
      });
    }
  }