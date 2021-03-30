class Elastic {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.01,
            length: 10
        }
        // to make it value in pass through the display function
        this.pointB=pointB
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }
    //fly for when the body is not there then it should fly
    fly(){
        this.elastic.bodyA= null
    }
    Launch(bodyA){
        this.elastic.bodyA=bodyA
    }

    display(){
        // in sling in the body then it should display 
       // if(this.elastic.bodyA){
      //      var pointA = this.sling.bodyA.position;
        //    var pointB = this.pointB;
        //    strokeWeight(4);
          //  line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    
    }
    
//}