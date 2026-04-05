import { Shape } from "./Shape.js";

export class Circle extends Shape {
 
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        super.testMethod();
        return this.radius ** 2 * Math.PI;
    }



}
