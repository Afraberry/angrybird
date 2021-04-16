class Chain {
  constructor(bodyA, bodyB) {
    var options = {
      length: 10,
      stiffness: 0.6,
      bodyA: bodyA,
      bodyB: bodyB,
    };

    this.chain = Matter.Constraint.create(options);
    World.add(world, this.chain);
  }
  display() {
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    stroke("pink");
    strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}
