// Not all functions are imported, be careful 👇
const {
    subtract,
    divide, 
    isDivisibleBy,
    gradeAssignment,
    areaOrPerimeter
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
//see smoke.test.js


// Section A 02. Test the subtraction() function

describe('Test a02, testing the subtract function', () => {
    test("Subtract 2 positive numbers, where the first parameter is larger than the second one", () => {
        let num1 = 5;
        let num2 = 1;
        var expected = 4;
        var output = subtract(num1, num2);
        expect(output).toBe(expected);
    });
    test("Subtract 2 positive numbers, where the first parameter is smaller than the second one", () => {
        let num1 = 3;
        let num2 = 7;
        var expected = -4;
        var output = subtract(num1, num2);
        expect(output).toBe(expected);
    });
    test("Subtract 2 numbers, where the first parameter is a negetive number", () => {
        let num1 = -1;
        let num2 = 5;
        var expected = -6;
        var output = subtract(num1, num2);
        expect(output).toBe(expected);
    });
    test("Subtract 2 negetive numbers, where the first parameter is larger than the second one", () => {
        let num1 = -2;
        let num2 = -1;
        var expected = -1;
        var output = subtract(num1, num2);
        expect(output).toBe(expected);
    });
    test("Subtract 2 negetive numbers, where the first parameter is smaller than the second one", () => {
        let num1 = -3;
        let num2 = -7;
        var expected = 4;
        var output = subtract(num1, num2);
        expect(output).toBe(expected);
    });
});

// Section A 03. Test the divide() function
// Feel free to delete all of the starter test block and make it better

describe('Test a03, testing the divide function', () => {
    test("Division where the denominator is a factor of the numerator", () => {
        let num1 = 25;
        let num2 = 5;
        var expected = 5;
        var output = divide(num1, num2);
        expect(output).toBe(expected);    
    });
    test("Division where the denominator is not a factor of the numerator", () => {
        let num1 = 25;
        let num2 = 6;
        var expected = 4.17;
        var output = divide(num1, num2);
        expect(output).toBeCloseTo(expected);    
    });
    test("Division by 0", () => {
        expect(() => {
            let num1 = 25;
            let num2 = 0;
            divide(num1, num2)})
        .toThrow('The value 0 cannot be used as the denominator');
    });
});

// Section A 04. Test the isDivisibleBy() function

// Section A 05. Test the areaOrPerimeter() function

// Section A 06. Test the gradeAssignment() function

// Section A 07. Test the disemvowel() function

// Section A 08. Test the removeUrlAnchor() function

// Section A 09. Test the strEndsWith() function

// Section A 10. Test the numberToString() function