function preload(){
    music = loadSound("alarm.mp3");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    detector = ml5.objectDetector("cocossd",modelloaded);
    detector.detect(video,gotresults);
    video.center();
}

function modelloaded(){
    document.getElementById("status").innerHTML = "status is detection objects";
    console.log("model is loaded");
}

function draw(){
    image(video,0,0,300,300);
}

function gotresults(results,error){
    console.log(results);
    if(error){
        console.error(error);
    }
    else{
        if(results[0].label!="person"){
            music.play();
        }
        else{
            music.pause();
        }
    }
}