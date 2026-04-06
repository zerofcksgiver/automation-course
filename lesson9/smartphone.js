//Створіть клас Smartphone, який успадковує Gadget 

import Gadget from './Gadget.js';

export default class Smartphone extends Gadget {
    constructor (brand, model, year, operatingSystem) {
        super(brand, model, year);
        this._operatingSystem = operatingSystem;
    }
    get operatingSystem() {
        return this._operatingSystem;
    }

    set operatingSystem(value) {
        const validOS = [ 'iOS', 'Android', 'HarmonyOS' ];
        if (!validOS.includes(value)) {
            console.log('Ошибка: недопустимая операционная система.');
            return;
        }
        this._operatingSystem = value;
    }

    getInfo() {
        return `This smartphone is a ${this._year} ${this.brand} ${this.model} working on ${this._operatingSystem}.`; //а зачем ставить _ перед year в смартфоне если и так работает?
    }
}