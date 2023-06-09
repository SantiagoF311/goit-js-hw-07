import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const link = document.createElement("a");
  link.href = original;
  link.classList.add("gallery__link");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = basicLightbox.create(`<img src="${original}">`);
    modal.show();
  });

  const img = document.createElement("img");
  img.src = preview;
  img.setAttribute("data-source", original);
  img.setAttribute("alt", description);
  img.setAttribute("title", description);

  img.classList.add("gallery__image");
  link.appendChild(img);

  const item = document.createElement("div");
  item.classList.add("gallery__item");
  item.appendChild(link);

  gallery.appendChild(item);
});

(function () {
  var $gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });
})();
