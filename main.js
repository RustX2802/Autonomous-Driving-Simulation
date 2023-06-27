carCanvas.height=window.innerHeight;
carCanvas.width=200;
networkCanvas.height=window.innerHeight;
networkCanvas.width=298;

const carCtx=carCanvas.getContext("2d");
const networkCtx=networkCanvas.getContext("2d");
const road=new Road(carCanvas.width/2,carCanvas.width*0.9);
const N=100;
const cars=generateCars(N);
const traffic=[
    new Car(100,-100,30,50,"DUMMY",2)
];

animate();

function animate(){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update([],[]);
    }
    for(let i=0;i<cars.length;i++){
        cars[i].update(road.borders,traffic);
    }

    carCanvas.height=window.innerHeight;
    networkCanvas.height=window.innerHeight;
    
    carCtx.translate(0,-cars[0].y+carCanvas.height*0.7);
    road.draw(carCtx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(carCtx);
    }
    carCtx.globalAlpha=0.2;
    for(let i=0;i<cars.length;i++){
        cars[i].draw(carCtx);
    }
    carCtx.globalAlpha=1;
    cars[0].draw(carCtx,true);

    Visualizer.drawNetwork(networkCtx,cars[0].brain);
    
    requestAnimationFrame(animate);
}

function generateCars(N){
    const cars=[];
    for(let i=1;i<=N;i++){
        cars.push(new Car(100,100,30,50,"AI"));
    }
    return cars;
}