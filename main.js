const container = document.querySelector('.container');
const button = document.querySelector('.reset-button');

function gridSize(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (let i=0; i<(rows*cols); i++) {
    let sketchDiv = document.createElement('div');
    container.appendChild(sketchDiv).className = "grid-item";
    sketchDiv.addEventListener('mouseover', event => {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      sketchDiv.style.backgroundColor = `#${randomColor}`;
    });
  };
};

function clearGrid() {
  const items = document.querySelectorAll('.grid-item');
  for (const item of items) {
    item.remove();
  };
};

function askPrompt() {
  var size = prompt('What size should the grid be?');
  if (size > 100){
    alert('The max amount is 100 items!');
    askPrompt();
  } else {
    gridSize(size, size);
  };
};

button.addEventListener('click', event => {
  console.log('grid cleared!');
  clearGrid();
  askPrompt();
});



gridSize(16, 16);