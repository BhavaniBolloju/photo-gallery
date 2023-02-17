"use strict";

const gallerySlider = document.querySelector(".slider");

//creating inserting images into the slider element
const createPhoto = function (i, image) {
  const imageElement = document.createElement("div");
  imageElement.classList.add(`gallery-item`);
  imageElement.classList.add(`gallery-item-${i}`);

  imageElement.innerHTML = `<img class="gallery-img-${i}" src="${image}" alt="gallery-pic"/> `;

  gallerySlider.append(imageElement);
};

for (let i = 1; i <= 5; i++) {
  const image = `/photos/photo-${i}.jpg`;
  createPhoto(i, image);
}

//listening to which image was clicked

gallerySlider.addEventListener("click", function (e) {
  const imageSelected = e.target;
  console.log(imageSelected);
});
