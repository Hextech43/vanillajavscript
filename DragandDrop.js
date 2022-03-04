let y = document.getElementById("output");

let holditems;

const statDrag = () => {
  message("drag started");
  holditems = event.target;
};

const preventing = () => {
  event.preventDefault();
};

const message = (m) => {
  y.innerHTML = m;
};

const DropNow = () => {
  message("drop it");
  if (event.target.className) {
    event.target.appendChild(holditems);
  }
};
