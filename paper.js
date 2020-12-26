class Paper{
  constructor(x, y, radius) {
      var options = {
          restitution:1.0,
          friction:0.5,
          density:0.8,
      }
      this.body = Bodies.circle(x, y, radius , options);
      this.paperMage = loadImage("paperPic.png");
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("blue");
      //ellipse(0,0,this.radius, this.radius);
      image(this.paperMage,0,0,this.radius,this.radius);
      pop();
      
    }
}