

export class Car {
    constructor(brand){
        console.log('a car was created');
        this.brand = brand;
        this.speedUnit = 'kmph';
        this.maxSpeed = 120;
        this.currentSpeed = 0;
    }
    start(){
        console.log('starting the engine');
    }
    accelerate(){
        this.currentSpeed = 80
    }
    
}

