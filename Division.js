class Division{
    constructor(x, y, width, height) {
        var options   = { isStatic:true }
        this.division = Bodies.rectangle(x, y, width, height, options);
        this.width    = width;
        this.height   = height;
        World.add(world, this.division);
      }
          
      display(){

        rectMode(CENTER);
        fill("white");
        rect(this.division.position.x, this.division.position.y, this.width, this.height);

      }
}