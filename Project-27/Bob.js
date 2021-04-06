class Bob{

    constructor(x, y, radius){

        var options ={
  
           isStatic : true,
           restitution : 0.3,
           friction : 1,
           density : 1.2

        }

        this.body = Bodies.circle(x,y,45,options);
        this.radius = radius;
        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position

        push();
        translate(pos.x, pos.y);

        ellipseMode(RADIUS);

        fill("white");
        stroke("green")
        strokeWeight(2);
        
        ellipse(0, 0, this.radius, this.radius);

        pop();

    }

}

