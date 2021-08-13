class Boat{
    constructor(x,y,w,h,boatPos){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w
    this.h = h
    this.boatPosition = boatPos
    this.image = loadImage("assets/boat.png")
    World.add(world,this.body)

   }
display(){
    var angle = this.body.angle
    var pos = this.body.boatPosition

    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,this.boatPosition,this.w,this.h)
    noTint()
    pop()
}
}