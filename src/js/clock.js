import {EventEmitter} from 'events';


export class Clock extends EventEmitter{

    static TICK = 'tick';
    static STOPPED = 'stopped';

    constructor(ms=1000){
        super();
        this.ms = ms;
        this.count = 0;
    }
    start(){
        this.intervalID = setInterval(() => {
            this.count++;
            this.emit(Clock.TICK,this.count);
        }, this.ms);
    }
    stop(){
        clearInterval(this.intervalID);
        this.emit(Clock.STOPPED,this.count);
    }
}