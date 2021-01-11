
import {Car} from './car';

export class SportsCar extends Car{

    type = 'Laxury';

    constructor(brand,sponsor){
        super(brand);
        this.sponsor = sponsor;
    }

    accelerate(){
        this.currentSpeed = 145;
    }
}