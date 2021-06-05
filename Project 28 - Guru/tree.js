class Tree{

constructor(x,y){
    this.x=x;
    this.y=y;
    this.image=loadImage("sprites/tree.png");

    this.bottomBody=Bodies.rectangle(this.x,this.y,450,10,{isStatic:true});
    this.leftBody=Bodies.rectangle(0,this.y-300,10,600,{isStatic:false});
    this.rightBody= Bodies.rectangle(this.x+225,this.y-300,10,600,{isStatic:false});

    World.add(world,this.bottomBody);
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);
}

display(){

var posBottom=this.bottomBody.position;
push()
translate(posBottom.x,posBottom.y+10)
imageMode(CENTER)
image(this.image,0,-300,450,600)
pop()



    
}
}