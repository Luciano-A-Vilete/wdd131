const scriptureGallery = [
    {
      title: "Book of Mormon",
      imageUrl: "../project/img/bom.webp",
      likes: 0,
    },
    {
      title: "Doctrine & Covenants",
      imageUrl: "../project/img/dec.webp",
      likes: 0,
    },
    {
      title: "Pearl of Great Price",
      imageUrl: "../project/img/pogp.webp",
      likes: 0,
    },
  ];

  function createscriptureGalleryElements(container, scriptureGallery) {
    scriptureGallery.forEach((product, index) => {
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

  const scriptureGalleryContainer = document.getElementById("lemonade-gallery");

  loadFromLocalStorage();
  createscriptureGalleryElements(scriptureGalleryContainer, scriptureGallery);

  function saveToLocalStorage(index, key, value) {
    let gallery = JSON.parse(localStorage.getItem("scriptureGallery")) || scriptureGallery;
    gallery[index][key] = value;
    localStorage.setItem("scriptureGallery", JSON.stringify(gallery));
  }

  function loadFromLocalStorage() {
    const gallery = JSON.parse(localStorage.getItem("scriptureGallery"));
    if (gallery) {
      gallery.forEach((product, index) => {
        scriptureGallery[index].likes = product.likes;
      });
    }
  }