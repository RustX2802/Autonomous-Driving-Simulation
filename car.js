class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0;

        this.sensor=new Sensor();
        this.controls=new Controls();
    }

    update(roadBorders){
        this.#move();
        this.polygon=this.#createPolygon();
        this.sensor.update(this.x,this.y,this.angle,roadBorders);
    }

    #createPolygon(){
        const points=[];
        const rad=Math.hypot(this.width,this.height)/2;
        const alpha=Math.atan2(this.width,this.height);
        points.push({
            x:this.x-Math.sin(this.angle-alpha)*rad,
            y:this.y-Math.cos(this.angle-alpha)*rad
        });
        points.push({
            x:this.x-Math.sin(this.angle+alpha)*rad,
            y:this.y-Math.cos(this.angle+alpha)*rad
        });
        points.push({
            x:this.x-Math.sin(Math.PI+this.angle-alpha)*rad,
            y:this.y-Math.cos(Math.PI+this.angle-alpha)*rad
        });
        points.push({
            x:this.x-Math.sin(Math.PI+this.angle+alpha)*rad,
            y:this.y-Math.cos(Math.PI+this.angle+alpha)*rad
        });
        return points;
    }

    #move(){
        if(this.controls.forward){
            this.speed+=this.acceleration; 
         }
         if(this.controls.reverse){
             this.speed-=this.acceleration;
         }
 
         if(this.speed!=0){
             const flip=this.speed>0?1:-1;
             if(this.controls.left){
                 this.angle+=0.03*flip;
             }
             if(this.controls.right){
                 this.angle-=0.03*flip;
             }
         }
 
         if(this.speed>this.maxSpeed){
             this.speed=this.maxSpeed;
         }
         if(this.speed<-this.maxSpeed/2){
             this.speed=-this.maxSpeed/2;
         }
 
         if(this.speed>0){
             this.speed-=this.friction;
         }
         if(this.speed<0){
             this.speed+=this.friction;
         }
         if(Math.abs(this.speed)<this.friction){
             this.speed=0;
         }
         this.x-=Math.sin(this.angle)*this.speed;
         this.y-=Math.cos(this.angle)*this.speed;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.polygon[0].x,this.polygon[0].y);
        for(let i=1;i<this.polygon.length;i++){
            ctx.lineTo(this.polygon[i].x,this.polygon[i].y);
        }
        ctx.fill();
        this.sensor.draw(ctx);
    }
}