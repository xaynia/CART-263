"use strict";

// let = variables (let variable = value)

// circle size (multiple of 5)
let circleSize = 40;

// random color
let shapeR = 0;
let shapeG = 0;
let shapeB = 0;

// toggle shapes
// true -> even rows = circles, odd rows = squares
// false -> even rows = squares, odd rows = circles
let altRows = true;

function setup() {
    console.log("go");
    createCanvas(400, 400);
    // random color on page load
    shapeR = random(255);
    shapeG = random(255);
    shapeB = random(255);
}

function draw() {
    background(220);
    // nested for loop (for loop reference: for(let i=0; i<something; i++))
    let rows = floor(height / circleSize);
    let cols = floor(width / circleSize);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // center
            let x = j * circleSize + circleSize / 2;
            let y = i * circleSize + circleSize / 2;

            // pick shape: via row number & altRows mode
            if (altRows) {
                // even row circles, odd row squares
                if (i % 2 === 0) {
                    drawShape(x, y, circleSize, "circle", shapeR, shapeG, shapeB);
                } else {
                    drawShape(x, y, circleSize, "square", shapeR, shapeG, shapeB);
                }
            } else {
                // even row squares, odd row circles
                if (i % 2 === 0) {
                    drawShape(x, y, circleSize, "square", shapeR, shapeG, shapeB);
                } else {
                    drawShape(x, y, circleSize, "circle", shapeR, shapeG, shapeB);
                }
            }
        }
    }
}

// when space bar is pressed -> change color for all shapes
function keyPressed() {
    if (key === ' ') {
        shapeR = random(255);
        shapeG = random(255);
        shapeB = random(255);
    }
}

// when mouse is clicked -> toggle between circle/square pattern
function mouseClicked() {
    altRows = !altRows;
}

// function to draw circle or square
function drawShape(x, y, size, shapeType, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);

    // circle
    if (shapeType === "circle") {
        circle(x, y, size);
    }
    // square
    else {
        rect(x - size / 2, y - size / 2, size, size);
    }
    pop();
}
