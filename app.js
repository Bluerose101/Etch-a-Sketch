// Creat DOM

const container = document.querySelector('.container');
const btnBlue = document.createElement('buttton');
const btnOrange = document.createElement('buttton');
const btnRGB = document.createElement('buttton');
const btnSize = document.createElement('buttton');
const buttonsContainer = document.querySelector('buttons');



//function to creat grid

function createGrids(col, row) {
    for (let i = 0; i < (col * row); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColums = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}
createGrids(16,16);

// functions to creat color buttons

