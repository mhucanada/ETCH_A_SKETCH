
const container = document.querySelector('#container');
const square = document.createElement('div');
const squares = document.getElementsByClassName('square');


function gridCreate(oneSide) {
    var squareDimension = 600 / oneSide;
    var numSquares = Math.pow(oneSide, 2);


    c = 0
    for (i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute("id", ++c);
        square.style.width = String(squareDimension) + 'px';
        square.style.height = String(squareDimension) + 'px';
        square.style.outline = '1px solid black';
        container.appendChild(square)
    }

    for (c = 0; c < squares.length; c++) {
        squares[c].addEventListener('mouseover', blackDraw);
    };
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};


var isDown = false;

// Checks if mouse is down, produces true for isDown
document.addEventListener("mousedown", function () {
    isDown = true;
})

// Checks if mouse if up, produces false for isDown
document.addEventListener("mouseup", function () {
    isDown = false;
});

// Function to fill in black for first creation and any new grid creations
function blackDraw() {
    if (isDown) {
        this.style.backgroundColor = 'rgba(0,0,0,1)';
    }
};

// Function to produce random colors for each square
function randomDraw() {
    if (isDown) {
        this.style.backgroundColor = getRandomColor();
    }
};

// Function that resets square fill color to black
function drawBlack() {
    if (isDown) {
        this.style.backgroundColor = 'rgba(1,2,3,4)';
    }
}



// Code for the buttons 

function clearGrid() {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'rgba(0,0,0,0)';
    }

}

function newGrid() {
    var squareInput = prompt('How many squares would you like on each side? Choose a number between 1 and 64', 16);

    if (squareInput == null) {
        return;
    } else if ((1 > squareInput) || (squareInput > 64)) {
        squareInput = prompt('Your number was too high or too low. Please choose another.', 16);
    } else {
        document.getElementById('container').innerHTML = '';
        container.appendChild(gridCreate(squareInput));
    }

}

function randColor() {
    for (c = 0; c < squares.length; c++) {
        squares[c].addEventListener('mouseover', randomDraw);
    }
}


// Don't really know why it won't work if I call blackDraw instead of drawBlack
function resetColor() {
    for (c = 0; c < squares.length; c++) {
        squares[c].addEventListener('mouseover', drawBlack);
    }
}

gridCreate(16);

