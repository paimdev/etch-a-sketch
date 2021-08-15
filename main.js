let size = 16;

const container = document.querySelector(".container");
container.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size},1fr)`;

for (let i=0; i<(size*size); i++) {
  const sketchDiv = document.createElement('div');
  container.appendChild(sketchDiv);
  console.log(i);
}