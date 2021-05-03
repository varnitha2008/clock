var hour,minute,second;



function setup() {
  createCanvas(400,400);

  

  angleMode(DEGREES);

  
}

function draw() {
  background(2);  

  translate (200,200);
  rotate(-90);

  hr=hour();
  console.log(hr);

  min=minute();
  console.log(min);

  sec=second();
  console.log(sec);
  
  scAngle= map(sec,0,60,0,360);
  hrAngle= map(hr,12,0,12,0,360);
  mnAngle= map(min,0,60,0,360);
// sec
  push ()
  rotate (scAngle)
  stroke (255,0,0);
  strokeWeight (7);
  line (0,0,120,0);
  pop ();
 
  //mn
  push ()
  rotate (mnAngle);
  stroke(0,255,0);
  strokeWeight(7)
  line (0,0,100,0);
  pop ();
  noFill ()
  stroke(255,0,0)
  strokeWeight(8);
  arc(0,0,350,350,0,scAngle)

  stroke(0,255,0)
  strokeWeight(8);
  arc(0,0,330,330,0,mnAngle)
  //hr
  rotate(-180)
  push ()
  rotate (hrAngle);
  stroke(0,0,255);
  strokeWeight(7)
  line (0,0,70,0);
  pop ();
  noFill ()
  stroke(0,0,255)
  strokeWeight(8);
  arc(0,0,310,310,0,hrAngle)

  


  


  drawSprites();
}