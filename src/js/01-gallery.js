import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const items = galleryItems
  .map(
    (image) =>
      `
      <div class="gallery__item">
        <a class="gallery__link">
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source=${image.original}
            alt="${image.description}"
          />
        </a>
      </div>
      `
  )
  .join(" ");

gallery.innerHTML = items;

const images = document.getElementsByTagName("img");

for (let i = 0; 0 < images.length; i++) {
  images[i].addEventListener
    ("click",
    () => {
      const instance = basicLightbox.create(`
      <img src="${galleryItems[i].original}" width="800" height="600">
`);
      instance.show();
    });
}
