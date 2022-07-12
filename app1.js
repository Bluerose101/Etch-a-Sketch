const container = document.querySelector('.container');
const resizeButton = document.querySelector('.resize-button button');

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




//create color button
function blackColor() {
   
    const boxes = container.querySelectorAll('.grid-box')
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', function () {
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor() 
