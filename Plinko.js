class Plinko {
    constructor (x, y, r) {
        var options = { isStatic : true }
        this.r = r;
        this.plinko = Bodies.circle(x, y, r, options);
        World.add(world, this.plinko);
    }

    display () {
        var pos = this.plinko.position;
        push ()
        translate(pos.x, pos.y);
        rotate(this.plinko.angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop()
    }
}