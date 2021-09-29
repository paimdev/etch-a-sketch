const container = document.querySelector('.container');
const button = document.querySelector('.reset-button')

function gridSize(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (let i=0; i<(rows*cols); i++) {
    let sketchDiv = document.createElement('div');
    container.appendChild(sketchDiv).className = "grid-item";
    sketchDiv.addEventListener('mouseover', event => {
      sketchDiv.classList.add('painted-item')
    });
  };
};

button.addEventListener('click', event => {
  console.log('this button was clicked')
});



gridSize(18, 18);