const container = document.querySelector('.container');
const resizeButton = document.querySelector('.resize-button button');
const resetButton= document.createElement('button');
const BlackButton = document.createElement('button');
const OrangeButton = document.createElement('button');
const RGBButton = document.createElement('button');
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
    reset();
    blackColor();
    OrangeColor();
    rgbColor();
})

// create reset button
function reset () {

const boxes = container.querySelectorAll('.grid-box');
resetButton.textContent = "RESET";
resetButton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.style.background= '#9DC6CA';
    })
});
colorButton_div.appendChild(resetButton).classList.add('button');
}
reset();

//create color buttons
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
blackColor() ;

function OrangeColor() {
   
    const boxes = container.querySelectorAll('.grid-box')
    OrangeButton.textContent = 'ORANGE';
    OrangeButton.addEventListener('click', function () {
        boxes.forEach(box => box.addEventListener('mouseenter', function() {
            box.style.background = '#FB9F8B'
        }))
    })
    colorButton_div.appendChild(OrangeButton).classList.add('button')
}
OrangeColor() ;

function rgbColor() {
    
    const boxs = container.querySelectorAll('.grid-box')
    RGBButton.textContent = "RGB"
    RGBButton.addEventListener('click' ,() => {
        boxs.forEach(box => box.addEventListener('mouseenter', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    colorButton_div.appendChild(RGBButton).classList.add('button');
}
rgbColor();