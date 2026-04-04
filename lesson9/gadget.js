//Створіть клас Gadget 

class Gadget {
    constructor (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this._year = year;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (value < 2000 || value > currentYear) {
            console.log('Ошибка: недопустимый год выпуска.');
            return;
            }
    this._year = value;
}

    getInfo () {
        return `This gadget is a ${this._year} ${this.brand} ${this.model}.`;
        }
        
    static getOldestGadget(gadgetsArray) {
        return gadgetsArray.reduce((oldest, current) => 
            current.year < oldest.year ? current : oldest);
    }

}





export default Gadget;

