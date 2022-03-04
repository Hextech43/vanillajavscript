let output = document.getElementById("carousel");

let ImageCount = 0;

let images = [
  "img/a.jpg",
  "img/avatar.jpg",
  "img/ice.jpg",
  "img/sp.jpg",
  "img/timothy.jpg",
];
let imageColor = ["111", "222", "00FF00", "333", "0000FF"];

let swapImage = () => {
  ImageCount++;
  if (ImageCount >= images.length) {
    ImageCount = 0;
  }
  output.src = images[ImageCount];
};

const IntervalTime = () => {
  setInterval(swapImage, 2000);
};
IntervalTime();
