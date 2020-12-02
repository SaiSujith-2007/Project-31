class Plinko {
    constructor(x,y){
    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 10;
    World.add(world, this.body);
    }
    display(){
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
}
}