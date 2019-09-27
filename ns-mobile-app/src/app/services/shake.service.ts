import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShakeService {

    private lastX: number;
    private lastY: number;
    private lastZ: number;
    private count = 0;

    constructor() { }


    shake(acc): boolean{

        if (!this.lastX) {
            this.lastX = acc.x;
            this.lastY = acc.y;
            this.lastZ = acc.z;
            return;
        }

        let deltaX: number, deltaY: number, deltaZ: number;
        deltaX = Math.abs(acc.x - this.lastX);
        deltaY = Math.abs(acc.y - this.lastY);
        deltaZ = Math.abs(acc.z - this.lastZ);

        if (deltaX + deltaY + deltaZ > 2) {
            this.count++;
        } else {
            this.count = Math.max(0, --this.count);
        }

        console.log(deltaX + deltaY + deltaZ)

        this.lastX = acc.x;
        this.lastY = acc.y;
        this.lastZ = acc.z;

        if (this.count > 2) {
            console.log('SHAKE');
            this.count = 0;
            return true;
        }

        return false;


    }
}


