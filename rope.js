class Rope{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB=pointB;
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
    }

    attach(body){
        this.rope.bodyA=body
        
    }

    fly(){
        this.rope.body=null
    }

    display(){
        if(this.rope.bodyA){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke(48,22,8)
        strokeWeight(3)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
        }
    }
}