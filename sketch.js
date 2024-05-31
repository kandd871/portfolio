var points = [];

function setup() { 
  createCanvas(window.innerWidth, 7000);
} 

function draw() { 
  // background(220);
   stroke(255, 15, 15, alpha);
  for(var i=0; i<points.length-1; i++){
    var p = points[i]; // get a blob from the list
    var nxt = points[i+1]; // get the next blob from the list
    
    var xdist = p.x - nxt.x; // distance in the x axis
    var ydist = p.y - nxt.y; // distance in the y axis
    // WARNING MATHS calculate the distance using Pythagoras theorem 
    var distance = Math.sqrt((xdist*xdist) + (ydist*ydist));
    
    if (distance < 50){ // if the distance is less than 50
      strokeWeight(10/distance); // set the strokeweight - gets smaller as distance gets bigger
      line(p.x,p.y,nxt.x,nxt.y); // draw the line
    }
  }
}


function mouseMoved(){ // run repeatedly when the mouse is moved
  // make a new point
  var newpoint = { 
            x: mouseX, 
            y: mouseY, 
          };
  points.push(newpoint); // add the point to the array
}
