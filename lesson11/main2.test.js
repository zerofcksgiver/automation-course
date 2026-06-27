describe('My first tests', () => {

    beforeAll(() => {
        console.log('Main before all');
    })

    beforeEach(() => {
        console.log('Main beforeEach');
    })
    describe('Calculation tests', () => {
    test('Adds 1 + 2 equals 3', () =>{
        let result = 1 + 2;
        expect(result).toBe(3);
        expect(result).toEqual(3)
} )
});

describe('console.log tests', () => {
    test('Test2', () =>{
        console.log('This is a test2');
    } )

    test('Test3', () =>{
        console.log('This is a test3');
    } )

    test('Test4', () =>{
        console.log('This is a test4');
    } )
})

  })

