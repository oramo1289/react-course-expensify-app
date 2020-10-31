const add = (a, b) =>  a + b;

test('should add two numbers', () => {
    const result = add(3, 4);
    // if (result !== 7) {
    //     throw new Error(`you add  4 and 3 the resul was ${result}`)
    // }
    expect(result).toBe(7)
});