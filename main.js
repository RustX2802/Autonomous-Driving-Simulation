myCanvas.height=window.innerHeight;
myCanvas.width=200;

const ctx=myCanvas.getContext("2d");
const road=new Road(myCanvas.width/2,myCanvas.width*0.9);
const car=new Car(100,100,30,50);

animate();

function animate(){
    car.update(road.borders);

    myCanvas.height=window.innerHeight;
    
    ctx.translate(0,-car.y+myCanvas.height*0.7);
    road.draw(ctx);
    car.draw(ctx);
    
    requestAnimationFrame(animate);
}