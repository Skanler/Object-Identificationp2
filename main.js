status = "";
img = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text("Dog", 100, 55);
    text("Cat", 325, 90);
    noFill();
    rect(100, 60, 200, 250);
    rect(300, 90, 100, 150)
}

function modelLoaded(){
    console.log("CocoSSD is ready to identify!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error)
    { console.log(error);}
        console.log(results);
    
}
