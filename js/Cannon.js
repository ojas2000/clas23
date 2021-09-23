class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonim = loadImage("canon.png");
    this.cannonbaseim = loadImage("cannonBase.png");
  }

 

  display()
  {
    push(); 
    imageMode(CENTER);
    image(this.cannonim,180,110,this.width,this.height)
    
    pop();

    image(this.cannonbaseim,70,20,200,200)
    

  }
}
