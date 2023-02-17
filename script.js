"use strict";

const gallerySlider = document.querySelector(".slider");
const galleryContainer = document.querySelector(".container");
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");
const leftCursor = document.querySelector(".leftCursor");
const rightCursor = document.querySelector(".rightCursor");

let currentNum = 1;
//creating inserting images into the slider element
const createPhoto = function (i, image) {
  const imageElement = document.createElement("div");
  imageElement.classList.add(`gallery-item`);
  imageElement.classList.add(`gallery-item-${i}`);
  // imageElement.setAttribute("data-index", i);

  imageElement.innerHTML = `<img class="gallery-img gallery-img-${i}" src="${image}" alt="gallery-pic" data-index="${i}"/> `;

  gallerySlider.append(imageElement);
};

for (let i = 1; i <= 10; i++) {
  const image = `/photos/photo-${i}.jpg`;
  createPhoto(i, image);
}

//adding selected image

const selectImageContainer = document.querySelector(".selected-item");
const gallery = document.querySelectorAll(".gallery-img");

const togglingActiveClass = function (num) {
  gallery.forEach((item) => item.classList.remove("active"));
  const getImage = document.querySelector(`.gallery-img-${num}`);
  getImage.classList.add("active");
};

togglingActiveClass(currentNum);

const createImage = document.createElement("img");
createImage.classList.add("selected-image");
createImage.src = "/photos/photo-1.jpg";

selectImageContainer.append(createImage);

//replacing the current image with the selected Image
const imageSelected = document.querySelector(".selected-image");
gallerySlider.addEventListener("click", function (e) {
  const image = e.target;
  if (!image.classList.contains("gallery-img")) return;
  currentNum = +image.dataset.index;
  imageSelected.src = image.src;
  gallery.forEach((item) => item.classList.remove("active"));

  image.classList.add("active");
});

//adding eventhandler to the arrows

const allImages = document.querySelectorAll(".gallery-item");
const selectedImage = document.querySelector(".selected-image");

let length = allImages.length;

rightArrow.addEventListener("click", function () {
  //increase
  if (currentNum >= length) {
    rightArrow.style.color = "red";
    return;
  } else {
    leftArrow.style.color = "black";
    currentNum = currentNum + 1;

    togglingActiveClass(currentNum);
    selectedImage.src = `/photos/photo-${currentNum}.jpg`;
  }
});

leftArrow.addEventListener("click", function () {
  //decrease
  if (currentNum <= 1) {
    leftArrow.style.color = "red";
    return;
  } else {
    rightArrow.style.color = "black";
    currentNum = currentNum - 1;
    togglingActiveClass(currentNum);
    selectedImage.src = `/photos/photo-${currentNum}.jpg`;
    // console.log(currentNum);
  }
});

const galleryItems = document.querySelectorAll(".gallery-item");
let imageValue = 0;

// leftCursor.addEventListener("click", function () {});
rightCursor.addEventListener("click", function () {
  console.log(imageValue);

  galleryItems.forEach((item, i) => {
    const index = item.querySelector(".gallery-img");
    const indexNum = +index.dataset.index;
    item.style.transform = `translateX(${(imageValue - indexNum) * 150}px)`;
    console.log(`translateX(${(imageValue - indexNum) * 150}px)`);
  });
  imageValue += 1;
});
