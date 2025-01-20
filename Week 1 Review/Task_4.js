"use strict";

// let = variables (let variable = value)

let rectX = 0;
let rectW = 400 / 3;

//Rectangle 1 RGB
let rect1R = 0;
let rect1G = 100;
let rect1B = 220;

//Rectangle 2 RGB
let rect2R = 0;
let rect2G = 150;
let rect2B = 220;

//Rectangle 3 RGB
let rect3R = 0;
let rect3G = 170;
let rect3B = 220;


function setup() {
    console.log("go")
    createCanvas(400, 400);
}

function draw() {
    background(200);
    // x, y, w, h, r, g, b
    drawrect(rectX, 0, rectW, 400, rect1R, rect1G, rect1B);
    drawrect(rectX + rectW, 0, rectW, 400, rect2R, rect2G, rect2B);
    drawrect(rectX + rectW * 2, 0, rectW, 400, rect3R, rect3G, rect3B);
}


// Mouseover : change rectangle RGB from blue to white when mouse is over
function mouseMoved() {
    // Check: is mouse is within the first rectangle
    if (
        mouseX >= rectX &&
        mouseX <= rectX + rectW &&
        mouseY >= 0 &&
        mouseY <= 400
    ) {
        // When mouse hovers over the rectangle —> make it white
        rect1R = 255;
        rect1G = 255;
        rect1B = 255;
    } else {
        // When mouse does NOT hover over the rectangle — make it the original blue
        rect1R = 0;
        rect1G = 100;
        rect1B = 220;
    }

    // Mouse move - Rectangle 2
    if (
        mouseX >= rectX + rectW &&
        mouseX <= rectX + rectW * 2 &&
        mouseY >= 0 &&
        mouseY <= 400
    ) {
        // When mouse hovers over the rectangle —> make it white
        rect2R = 255;
        rect2G = 255;
        rect2B = 255;
    } else {
        // When mouse does NOT hover over the rectangle — make it the original blue
        rect2R = 0;
        rect2G = 150;
        rect2B = 220;
    }

    // Mouse move - Rectangle 3
    if (
        mouseX >= rectX + rectW * 2 &&
        mouseX <= rectX + rectW * 3 &&
        mouseY >= 0 &&
        mouseY <= 400
    ) {
        // When mouse hovers over the rectangle —> make it white
        rect3R = 255;
        rect3G = 255;
        rect3B = 255;
    } else {
        // When mouse does NOT hover over the rectangle — make it the original blue
        rect3R = 0;
        rect3G = 170;
        rect3B = 220;
    }
}


function drawrect(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);     //use function parameters / variables here
    pop();
}

