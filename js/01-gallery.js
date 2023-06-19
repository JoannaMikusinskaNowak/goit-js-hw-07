import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const findGallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
          <img class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
          />
          </a>
          </div>`
    )

    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
findGallery.innerHTML = addGalleryMarkup;

findGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleKeyDown);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleKeyDown);
      },
    }
  );
  instance.show();

  function handleKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
