const container = document.querySelector('.container');
const resizeButton = document.querySelector('.resize-button button');
const resetButton= document.createElement('button');
const BlackButton = document.createElement('button');
const colorButton_div = document.querySelector('.color-buttons');

//create grids
let sizeOfGrid = 16;
const createGrid = (amtOfGrids) =>  {
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for ( let j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 600 / amtOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            row.appendChild(gridBox)
        }
        container.appendChild(row);
}
}
createGrid(sizeOfGrid);

//Create resize button

function reSet() {
    const boxs = container.querySelectorAll('.grid-box')
    boxs.forEach(box => {
        box.remove();
    })
}
resizeButton.addEventListener('click',() => {
    reSet();
    let userSize = Number(prompt ("Please enter dimentions for the new grid"));
    while (userSize > 100) {
        userSize = Number(prompt ("Ops! Something is wrong. Please make sure it's under 100"));
    }
    createGrid(userSize);
})

// create reset button
resetButton.textContent = "RESET";
resetButton.addEventListener('click', () => {
    reSet();
});
colorButton_div.appendChild(resetButton).classList.add('button');


//create color button
function blackColor() {
   
    const boxes = container.querySelectorAll('.grid-box')
    BlackButton.textContent = 'BLACK';
    BlackButton.addEventListener('click', function () {
        boxes.forEach(box => box.addEventListener('mouseenter', function() {
            box.style.background = 'black'
        }))
    })
    colorButton_div.appendChild(BlackButton).classList.add('button')
}
blackColor() 
