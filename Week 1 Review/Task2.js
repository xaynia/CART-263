"use strict";

function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {
    background(200);
    //call that function declared here
    drawEllipse(100, 100, 160);
    drawEllipse2(300, 200, 260);
    drawEllipse3(100, 250, 100);
}

//new functions cant be declared inside other functions
//function drawEllipse(255, 300, 260) {     //parameters are words (variables, not numbers)
function drawEllipse(x, y, w) {
    push();
    noStroke();
    fill(0, 55, 255);
    ellipse(x, y, w);     //use function parameters / variables here
    pop();
}

function drawEllipse2(x, y, w) {
    push();
    noStroke();
    fill(0, 155, 255);
    ellipse(x, y, w);     //use function parameters / variables here
    pop();
}

function drawEllipse3(x, y, w) {
    push();
    noStroke();
    fill(0, 255, 255);
    ellipse(x, y, w);     //use function parameters / variables here
    pop();
}