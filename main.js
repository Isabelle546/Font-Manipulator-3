leftWristX=0;
rightWristX=0;
difference=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550, 600);
    video.position(50, 50);

    canvas=createCanvas(550, 400);
    canvas.position(700, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
    background('#FFFFFF');
    document.getElementById("font_size").innerHTML="Width and Height of the font will be = "+difference+"px";
    textSize(difference);
    fill('blue');
    stroke('blue');
    text('Marley is the cutest dog ever :)!', 30, 200)
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);

console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+"difference = "+ difference);
    }
}