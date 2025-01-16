"use strict";

function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {
    background(200);
    //call that function declared here
    drawEllipse(100, 100, 160, 0, 55, 255);
    drawEllipse(300, 200, 200, 0, 155, 255);
    drawEllipse(100, 250, 100, 100, 250, 100);
}

function drawEllipse(x, y, w, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w);     //use function parameters / variables here
    pop();
}