const { add } = require('./calculator.js');

describe('Add function tests', () => {
    test('2 + 2 = 4',() => {
        const result = add(2,2);
        expect(result).toBe(4);
    })
    test('2 + -10 = -8',() => {
        const result = add(2, -10);
        expect(result).toBe(-8);
    })
    test('2 + 0 = 2',() => {
        const result = add(2, 0);
        expect(result).toBe(2);
    })
    test('-2 + -2 = -4',() => {
        const result = add(-2, -2);
        expect(result).toBe(-4);
    })
})