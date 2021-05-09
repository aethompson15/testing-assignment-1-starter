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
    test("Testing using an empty array", () => {
        expect(largestValue([])).toBe();
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
describe('Test b13, testing the houseForSale object', () => {
    test("Testing the existing properties", () => {
        expect(houseForSale).toHaveProperty('bath', true);
        expect(houseForSale).toHaveProperty('bedrooms', 4);
        expect(houseForSale).toHaveProperty('kitchen.amenities', ['oven', 'stove', 'washer']);
        expect(houseForSale).toHaveProperty('kitchen.area', 20);
        expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
    });
    test("Testing non-existent properties", () => {
        expect(houseForSale).not.toHaveProperty('jacuzzi');
        expect(houseForSale).not.toHaveProperty('bedrooms', 10);
        expect(houseForSale).not.toHaveProperty('kitchen.amenities', ['hotplate', 'breakfast bar', 'pantry']);
        expect(houseForSale).not.toHaveProperty('kitchen.area', 50);
        expect(houseForSale).not.toHaveProperty(['kitchen', 'big.garden']);
    });
    test("Testing the type", () => {
        expect(typeof houseForSale).toBe('object');
    });
}); 

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
describe('Test b15, testing the countCharsInString()', () => {
    test('Testing a string of length 1', () => {
        expect(Object.values(countCharsInString('a'))[0]).toEqual(1);
        expect(typeof countCharsInString('a')).toBe('object');
        expect(typeof Object.values(countCharsInString('a'))[0]).toBe('number');
    });
    test('Testing a larger string', () => {
        expect(countCharsInString('hello world').h).toEqual(1);
        expect(countCharsInString('hello world').l).toEqual(3);
        expect(typeof countCharsInString('hello world')).toBe('object');
        expect(typeof countCharsInString('hello world').o).toBe('number');
    });
    test('Testing a string with both upper and lower case characters', () => {
        expect(countCharsInString('HELLO hello').h).toEqual(1);
        expect(countCharsInString('heLlo wOrld').l).toEqual(2);
    });
    test('Testing a string with non-alphabetic characters', () => {
        let sillyString = '1234//?^';
        let countChar1 = '^';
        let countChar2 = '/';
        expect(countCharsInString(sillyString)[countChar1]).toEqual(1);
        expect(countCharsInString(sillyString)[countChar2]).toEqual(2);
    });
});