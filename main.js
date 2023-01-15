var difference = 0;
var leftWristX = 0;
var rightWristX = 0;

function setup() {
    video = createCapture(VIDEO); //code for accessing the webcam
    video.size(550, 500);// code for giving size to webcam
    canvas = createCanvas(550, 550);// code for creating canvas
    canvas.position(560, 150); //code for giving position to canvas
    poseNet = ml5.poseNet(video, modelLoaded); // code for setting pose net
    poseNet.on('pose', gotPoses);// when model got pose it will run function gotPoses
}

function draw() {
    background('#808080'); //code for setting background to the canvas
    document.getElementById("text_size").innerHTML = "Width and Height of the square will be " + difference + "px";
    fill('#ffff00');// fill the color
    textSize(difference);
    text("Ravi", 10, 300)// pre-defiend function to create square and their are 3 parameter 1 is x and 2 is Y and 3 is size of the square

}

function modelLoaded() {
    // to get confirmed that model is loaded
    console.log("Model Loaded!");
}

function gotPoses(results) { 
    // this function will hold results
    if(results.length > 0) {
        console.log(results);// console log Results
        leftWristX = results[0].pose.leftWrist.x;// to set the value of leftWrist using the result[0].pose.leftWrist.x code
        rightWristX = results[0].pose.rightWrist.x;// to set the value of leftWrist using the result[0].pose.leftWrist.x code
        difference = floor(leftWristX - rightWristX);// to get difference bettween leftWristX and rightWristY 
        console.log("leftWristX = " + leftWristX + " rightWristY = " + rightWristX + " Difference = " + difference);

    } 
}