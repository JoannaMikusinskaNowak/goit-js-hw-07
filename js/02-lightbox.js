import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const findGallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
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
  const lightbox = new SimpleLightbox(".gallery a", {
    elements: [
      {
        src: event.target.dataset.source,
        title: event.target.alt,
      },
    ],

    onShow: () => {
      document.addEventListener("keydown", handleKeyDown);
    },
    onClose: () => {
      document.removeEventListener("keydown", handleKeyDown);
    },
  });
  lightbox.open();

  function handleKeyDown(event) {
    if (event.code === "Escape") {
      lightbox.close();
    }
  }
}
