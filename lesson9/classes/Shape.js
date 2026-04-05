export class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        console.log(`Color is ${this.color}`);
    }

    getArea() {
        throw new Error('Method getArea() must be implemented');

    }

    testMethod() {
        console.log('This is a test method in the Shape class');
    }

}
