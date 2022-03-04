let output = document.getElementById("carousel");

let Imagecount = 0;
let images = [
  "images/icecream.jpg",
  "images/handtomato.jpg",
  "images/nettomato.jpg",
  "images/table.jpg",
];
let imageColor = ["222", "00ff00", "333", "000ff"];

let swapImage = () => {
  Imagecount++;
  if (Imagecount >= images.length) {
    Imagecount = 0;
  }
  output.src = images[Imagecount];
};
const IntervalTime = () => {
  setInterval(swapImage, 2000);
};
IntervalTime();
