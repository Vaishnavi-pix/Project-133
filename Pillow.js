image1="";
status="";
object=[];
function preload(){
    image1=loadImage("Pillow.jpg");
}
function setup(){
    canvas=createCanvas(620,520);
    canvas.center();
    
    objectDetecter=ml5.objectDetector("cocossd",modelLoaded);
}
function modelLoaded(){
console.log("Model Loaded");
status=true;
objectDetecter.detect(image1,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    object=results;
}
}
function draw(){
    image(image1,0,0,620,520);
    if(status != ""){
        r=random(255);
        g=random(255);
        b=random(255);
        for(i=0;i<object.length;i++){
            
            percent=floor(object[i].confidence *100);
            fill(r,g,b);
            text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}
