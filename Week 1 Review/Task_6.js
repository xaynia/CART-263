"use strict";

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);
}

// text object
let textObj = {
    str: "test",
    color: 255,
    size: 28
};

const START_X = 25;
const START_Y = 20;

function draw() {
    background(0);

    // main text (center)
    fill(textObj.color);
    textSize(textObj.size);
    text(textObj.str, width / 2, height / 2);

    // first for loop (0 -> 9)
    fill(255);
    textSize(16);
    for (let i = 0; i < 10; i++) {
        let xPos = i * 20; // if i==1 -> x=20, i==2 -> x=40, etc.
        text(i, START_X + xPos, START_Y);
    }

    // second for loop (15 -> 1)
    // use i to offset the y position
    for (let i = 14; i >= 1; i--) { //i = i - 1 same as i--
        let yPos = (i + 1) * 20;
        text(i, START_X, yPos);
    }

}
