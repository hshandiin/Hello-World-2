let img;
let img2;
let img3;




function preload() {
    img = loadImage('mv.png');
    img2 = loadImage('map.png');
    img3 = loadImage('prayer.jpg');



}


function setup() {
    createCanvas(600, 400);
    background(209, 79, 103);


}

function draw() {
    image(img, 80, 120, 450, 450);
    image(img2, 150, 0, 300, 300);
    if (keyIsPressed === true) {
        background(img3);
    } else {
        fill(255);
    }

}

function mousePressed() {
    loop();
    background(0);
}

function mouseReleased() {
    noLoop();
    background(209, 79, 103);
}