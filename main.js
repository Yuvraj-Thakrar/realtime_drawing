
nose_x=0;
nose_y=0;

left_wrist_x=0;
right_wrist_x=0;

diffrence=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is Initalized");
}

function gotPoses(results){
if (results.length>0) {
    console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log("nose x="+nose_x+"and nose y= "+nose_y);
left_wrist_x=results[0].pose.leftWrist.x;
right_wrist_x=results[0].pose.rightWrist.x;
diffrence=floor(left_wrist_x-right_wrist_x);
console.log( "lest wrist ="+left_wrist_x+"right wrist="+right_wrist_x+".The diffrence is"+diffrence);
}
}

function draw(){
    background('#808080');
document.getElementById("square").innerHTML="Width And Hieght of the sqaure is "+diffrence+"px";
    fill('#FF69B4');
    stroke('black');
    square(nose_x,nose_y,diffrence);

}