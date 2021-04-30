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

//Test B13

//Test B14

//Test B15