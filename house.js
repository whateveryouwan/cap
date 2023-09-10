class House{
    constructor (x,y,width,height){
        var options={
            density:3.2
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        console.log(this.body)
        this.image=loadImage("wood1.png")
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
    display(){
      var pos=this.body.position
      image(this.image,pos.x,pos.y,this.width,this.height)  
    }
}