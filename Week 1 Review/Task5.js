"use strict";


let counter = 0; // ellipses
// ellipse
let radius = 20;
let ellipseAlpha = 20;
// square
let orangeSquare = {
    x: 50,
    y: 50,
    w: 100,
    h: 100,
    defaultColor: { r: 255, g: 165, b: 0 },   // orange
    highlightColor: { r: 255, g: 200, b: 50 } // light orange - hover
};
let redSquare = { // red square
    x: 200,
    y: 50,
    w: 100,
    h: 100,
    defaultColor: { r: 255, g: 0, b: 0 },    // red
    highlightColor: { r: 255, g: 100, b: 100 } // light red - hover
};

function setup() {
    console.log("go");
    createCanvas(400, 400);
}

function draw() {
    background(200);

    // orange square: hover color
    if (checkCollisionWithSquare(orangeSquare)) {
        fill(orangeSquare.highlightColor.r, orangeSquare.highlightColor.g, orangeSquare.highlightColor.b);
    } else {
        fill(orangeSquare.defaultColor.r, orangeSquare.defaultColor.g, orangeSquare.defaultColor.b);
    }
    displaySquare(orangeSquare);

    // red square: hover color
    if (checkCollisionWithSquare(redSquare)) {
        fill(redSquare.highlightColor.r, redSquare.highlightColor.g, redSquare.highlightColor.b);
    } else {
        fill(redSquare.defaultColor.r, redSquare.defaultColor.g, redSquare.defaultColor.b);
    }
    displaySquare(redSquare);

    // ellipse counter (if 1 to 10)
    if (counter >= 1 && counter <= 10) {
        let i = 0;
        while (i < counter) {
            // Each ellipse grows bigger and more opaque as i increases
            let currentRadius = radius + i * 10;
            let currentAlpha = ellipseAlpha + i * 20;
            // Draw the ellipse in the center
            drawCircle(width / 2, height / 2, currentRadius, currentAlpha);
            i++;
        }
    }
}

// render square
function displaySquare(sq) {
    rect(sq.x, sq.y, sq.w, sq.h);
}

// check mouse position (is it inside the square)
function checkCollisionWithSquare(sq) {
    if (
        mouseX >= sq.x &&
        mouseX <= sq.x + sq.w &&
        mouseY >= sq.y &&
        mouseY <= sq.y + sq.h
    ) {
        return true;
    }
    return false;
}

// ellipse
function drawCircle(x, y, r, a) {
    noStroke();
    fill(255, 255, 255, a);
    ellipse(x, y, r, r);
}

// if mouse clicked:
function mouseClicked() {
    // orange square clicked -> increase counter
    if (checkCollisionWithSquare(orangeSquare)) {
        counter++;
    }
    // red square clicked -> decrease counter
    if (checkCollisionWithSquare(redSquare)) {
        counter--;
    }
}