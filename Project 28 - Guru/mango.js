class mango {

    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/mango.png");

        this.body = Bodies.circle(this.x, this.y, this.r / 2, options);


        World.add(world, this.body);
    }

    display() {

        var mangopos = this.body.position;
        push()
        translate(mangopos.x, mangopos.y)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r*2, this.r*2)
        pop()

    }
}