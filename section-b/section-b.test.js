const {
    largestValue,
    getEven,
    houseForSale,
    sortNumbers,
    countCharsInString
} = require("./section-b.js");


//Test B11
describe('Test b11, testing the largestValue() function', () => {
    test("Testing using an ordered array", () => {
        expect(largestValue([1, 2, 3])).toBe(3);
    });
    test("Testing using an array with repeated values", () => {
        expect(largestValue([1, 2, 2])).toBe(2);
    });
    test("Testing using an array with negetive values", () => {
        expect(largestValue([-1, -2, -3])).toBe(-1);
    });
});

//Test B12
describe('Test b12, testing the getEven() function', () => {
    test("Testing using an array containing 2 odd and 2 even numbers", () => {
        expect(getEven([1, 2, 3, 4])).toEqual([2, 4]);
    });
    test("Testing using an array with only even values", () => {
        expect(getEven([2, 4, 6])).toEqual([2, 4, 6]);
    });
    test("Testing using an array with negetive values", () => {
        expect(getEven([-1, -2, -3, -4])).toEqual([-2, -4]);
    });
});

//Test B13

//Test B14

//Test B15