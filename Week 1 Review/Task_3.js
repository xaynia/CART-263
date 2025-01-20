"use strict";

// let = variables (let variable = value)
let square1X = 100;
let square1Y = 100;

let square2X = 230;
let square2Y = 250;

let square3Y = 250;
let square3R = 100;

function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {
    background(200);
    //call that function declared here
    drawSquare(square1X, square1Y, 110, 0, 55, 255);
    drawSquare(square2X, square2Y, 90, 0, 155, 255);
    drawSquare(100, square3Y, 100, square3R, 250, 100);
    square3Y = square3Y + 1; // moves square3 Y
    // when square reaches bottom edge, reset y = 0
    if (square3Y > height) {
        square3Y = 0;
    }
}

// This function runs automatically when you click on the canvas
function mouseClicked() {
    if (square1X === 100 && square1Y === 100) {
        // Move the square to a new position
        square1X = 300;
        square1Y = 200;
    } else {
        // Move it back to the original position
        square1X = 100;
        square1Y = 100;
    }
}

// If space bar is pressed, 2nd rectange position moves
function keyPressed() {
    if (key == ' ' && square2X === 230 && square2Y === 250) { //this means space bar, since it is a space inside of the single quotes 
        // Move the square to a new position
        square2X = 300;
        square2Y = 200;
    }
    // press ENTER to put it back
    else if (keyCode === ENTER) {
        square2X = 230;
        square2Y = 250;
    }
}

// updates (red) color when the mouse for triangle 3
function mouseMoved() {
    // Update the grayscale value.
    square3R += 5;
    // Reset the grayscale value.
    if (square3R > 255) {
        square3R = 0;
    }
}

function drawSquare(x, y, w, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    square(x, y, w);     //use function parameters / variables here
    pop();
}

