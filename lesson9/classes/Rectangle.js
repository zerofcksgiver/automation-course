import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
    constructor (color, width, height) {
        super(color);
        this.width = width;
        this.height = height;

    }

        getArea() {
            return this.width * this.height;
        }
}
