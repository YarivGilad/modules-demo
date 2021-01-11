import {Clock} from './clock';
// import {SportsCar} from './sport.car';


let rolex = new Clock(1500);

rolex.on(Clock.TICK,(data)=>{
    console.log(`ticking rolex ${data} times`);
    if(data >= 5){
        rolex.stop();
    }
});

rolex.on(Clock.STOPPED,(count)=>{
    console.log(`rolex stopped after ${count} times`);
})
rolex.start();


// const lambo = new SportsCar();
// lambo.start();

// console.log(lambo.type);
// lambo.accelerate()
// console.log(lambo.currentSpeed);

