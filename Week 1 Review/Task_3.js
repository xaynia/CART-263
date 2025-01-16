"use strict";

function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {
    background(200);
    //call that function declared here
    drawSquare(100, 200, 160, 0, 55, 255);
    drawSquare(300, 200, 200, 0, 155, 255);
    drawSquare(100, 250, 100, 100, 250, 100);
}

function drawSquare(x, y, w, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    square(x, y, w);     //use function parameters / variables here
    pop();
}