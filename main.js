const container = document.querySelector(".container");

function gridSize(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (let i=0; i<(rows*cols); i++) {
    let sketchDiv = document.createElement('div');
    container.appendChild(sketchDiv).className = "grid-item";
    sketchDiv.classList.add(`item-${i}`);
    console.log(i);
  };
};

const gridElements = document.querySelectorAll(".grid-item");

for (const element of gridElements) {
  element.addEventListener("mouseover", event => {
    element.classList.add('painted-item');
  });
}

gridSize(18, 18);