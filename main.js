video="";
status="";
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}
function draw(){
    image( video,0,0,480,380);
    if (status != ""){
        objectDetector.detect(video,gotResult)
    
    for (i = 0; i<objects.length; i++){
        doctument.getElementById("status").innerHTML = "Status : Objects Detected";
        doctument.getElementById("numberofobjects").innerHTML = "number of objects detected are:"+ objects.lenght;
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+" "+percent+"%",objects[i].x + 15, objects[i].y+ 15);
    noFill();
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height)   }
}
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById('status').innerHTML = "status : detecting objects";
}
function modelloaded(){
    console.log("modelloaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);

}