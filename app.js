//Creating default 16x16 grid
const container = document.querySelector("#container");

makeGrid(16);
makeColor('black');

//Randomize Color Button
const randomBtn = document.querySelector("#random-color");
randomBtn.addEventListener("click", () => randomColor());
//Choose Brush Color Button
const chooseColorBtn = document.querySelector("#brush-color");
chooseColorBtn.addEventListener("click", () =>{
    let brushColor = prompt("Type your brush color (nothing too fancy, just generic colors) :)");
    makeColor(brushColor);
})
// Clear grid button
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => clearGrid());
//Resize Button
const resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", () => {

    //remove original grid
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    do{
        var newSize = parseInt(prompt("Enter a Grid Size (1 - 150): \n(Example: 16 --> creates 16x16 Grid)"));
    }
    while(isNaN(newSize)){
        if(newSize < 1){
            alert("Grid Size CANNOT be smaller than 1!\nReverting back to default 16x16 size");
            makeGrid(16);
            makeColor('black');
        }
        else if(newSize > 150){
            alert("Grid Size is too large!! Are you TRYING to freeze this webpage?!?\nReverting back to default 16x16 size");
            makeGrid(16);
            makeColor('black');
        }
        else{
            makeGrid(newSize);
            makeColor("black");
        }
    }
});

//Grid Function
function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.height = `${(480/size)}px`;
            row.appendChild(square);
        }
    }
}
//return grid to white
function clearGrid() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

//fill in grid with default color - black
function makeColor(color) {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = color;
        });
    });
}

//color randomizer
function randomColor() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

//random color function
function getRandomColor() {
    var value = '0123456789ABCDEF';
    var hexCode = '#';
    for ( var i = 0; i < 6; i++) {
        hexCode += value[Math.floor(Math.random() * 16)];
    }
    return hexCode;
}
