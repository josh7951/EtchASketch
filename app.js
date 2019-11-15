//Creating default 16x16 grid
const container = document.querySelector("#container");

makeGrid(16);
makeColor('black');

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
        var newSize = parseInt(prompt("Enter a Grid Size: (Example: 16 --> creates 16x16 Grid)"));
    }
    while(isNaN(newSize));
    makeGrid(newSize);
    makeColor("black");

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
