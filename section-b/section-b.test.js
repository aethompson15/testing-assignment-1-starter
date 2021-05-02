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

//Test B13 // function needs changing to not 
/* describe('Test b13, testing the houseForSale() function', () => {
    test("Testing the existing function properties", () => {
        expect(houseForSale).toHaveReturnedWith('bath', true);
        expect(houseForSale).toHaveReturnedWith('bedrooms', 4);
        expect(houseForSale).toHaveReturnedWith('kitchen.amenities', ['oven', 'stove', 'washer']);
        expect(houseForSale).toHaveReturnedWith('kitchen.area', 20);
        expect(houseForSale).toHaveReturnedWith('kitchen.nice.oven');
    });
    test("Testing non-existent function properties", () => {
        expect(houseForSale).not.toHaveReturnedWith('jacuzzi');
        expect(houseForSale).not.toHaveReturnedWith('bedrooms', 10);
        expect(houseForSale).not.toHaveReturnedWith('kitchen.amenities', ['hotplate', 'breakfast bar', 'pantry']);
        expect(houseForSale).not.toHaveReturnedWith('kitchen.area', 50);
        expect(houseForSale).not.toHaveReturnedWith('kitchen.big.garden');
    });
}); */

//Test B14
describe('Test b14, testing the sortNumbers() function', () => {
    test('Testing an empty array', () => {
        expect(sortNumbers([])).toEqual([]);
        expect(sortNumbers([])).toHaveLength(0);
    });
    test('Testing an unordered array', () => {
        expect(sortNumbers([5, 7, 9, 2, 6])).toEqual([2, 5, 6, 7 ,9]);
        expect(sortNumbers([5, 7, 9, 2, 6])).toHaveLength(5);
    });
    test('Testing a non-numeric array', () => {
        expect(sortNumbers(['b', 'd', 'a', 'c'])).not.toEqual(['a', 'b', 'c', 'd']);
    })
});

//Test B15