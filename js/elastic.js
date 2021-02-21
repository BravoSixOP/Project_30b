class elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 0.6
        }
        this.elastic = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.elastic);
    }
    attach(body){
        this.elastic.bodyA = body;
    }
    fly(){
        this.elastic.bodyA = null;
    }
    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position
            var pointB = this.pointB;

            line(pointA.x, pointA.y, pointB.x, pointB.y)        
        }
    }
}