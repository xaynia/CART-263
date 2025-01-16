"use strict";

function setup() {
    console.log("go")
    createCanvas(400, 400);

}

function draw() {
    background(200);

    //circle 1
    circle(50, 50, 55);
    fill("yellow");

    //circle 2
    circle(170, 120, 85);
    fill("green");

    //circle 3
    circle(300, 260, 170);
    fill("blue");
}