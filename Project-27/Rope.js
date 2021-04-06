class Rope{

    constructor(bodyA, pointB){

        var options = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
    
        }
    
        this.pointB = pointB;

        this.rope = Constraint.create(options);
    
        World.add(world, this.rope);
    
    }

    display(){

        var positionA = this.rope.bodyA.position;
        var positionB = this.pointB;

        stroke("blue");
        strokeWeight(4);

        line(positionA.x,positionA.y,positionB.x,positionB.y);

    }
    
}

