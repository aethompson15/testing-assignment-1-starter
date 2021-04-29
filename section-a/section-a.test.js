// Not all functions are imported, be careful 👇
const {
    subtract,
    divide, 
    isDivisibleBy,
    gradeAssignment,
    areaOrPerimeter,
    disemvowel,
    strEndsWith,
    removeUrlAnchor,
    numberToString
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
//see smoke.test.js


// Section A 02. Test the subtraction() function

describe('Test a02, testing the subtract function', () => {
    test("Subtract 2 positive numbers, where the first parameter is larger than the second one", () => {
        expect(subtract(5, 1)).toBe(4);
    });
    test("Subtract 2 positive numbers, where the first parameter is smaller than the second one", () => {
        expect(subtract(3, 7)).toBe(-4);
    });
    test("Subtract 2 numbers, where the first parameter is a negetive number", () => {
        expect(subtract(-1, 5)).toBe(-6);
    });
    test("Subtract 2 negetive numbers, where the first parameter is larger than the second one", () => {
        expect(subtract(-2, -1)).toBe(-1);
    });
    test("Subtract 2 negetive numbers, where the first parameter is smaller than the second one", () => {
        expect(subtract(-3, -7)).toBe(4);
    });
});


// Section A 03. Test the divide() function

describe('Test a03, testing the divide function', () => {
    test("Division where the denominator is a factor of the numerator", () => {
        expect(divide(25, 5)).toBe(5);    
    });
    test("Division where the denominator is not a factor of the numerator", () => {
        expect(divide(25, 6)).toBeCloseTo(4.17);    
    });
    test("Division by 0", () => {
        expect(() => {
            divide(25, 0)
        }).toThrow('The value 0 cannot be used as the denominator');
    });   
});



// Section A 04. Test the isDivisibleBy() function

describe('Test a04, testing the isDivisibleBy() function', () => {
    test("Two positive numbers which are both factors", () => {
        expect(isDivisibleBy(20, 5, 4)).toBeTruthy();
    });
    test("Two positive numbers where only one is a factor", () => {
        expect(isDivisibleBy(20, 5, 3)).toBeFalsy();
    });
    test("Two numbers which are both factors", () => {
        expect(isDivisibleBy(20, 5, -4)).toBeTruthy();
    });
    test("Two negetive numbers which are not both factors", () => {
        expect(isDivisibleBy(20, -6, -3)).toBeFalsy();
    });
});


// Section A 05. Test the areaOrPerimeter() function
describe('Test a05, testing the areaOrPerimeter() function', () => {
    test("Two numbers that are the same - should return area, l*w", () => {
        expect(areaOrPerimeter(5,5)).toBe(25);
    });
    test("Two numbers that are different - should return perimeter, 2(l+w)", () => {
        expect(areaOrPerimeter(3,4)).toBe(14);
    });
});


// Section A 06. Test the gradeAssignment() function
describe('Test a06, testing the gradeAssignment() function', () => {
    test("Testing with an average above 90", () => {
        expect(gradeAssignment(91, 95, 99)).toBe('A');
    });
    test("Testing with an average between 80-89", () => {
        expect(gradeAssignment(70, 85, 90)).toBe('B');
    });
    test("Testing with an average between 70-79", () => {
        expect(gradeAssignment(71, 80, 73)).toBe('C');
    });
    test("Testing with an average between 60-69", () => {
        expect(gradeAssignment(60, 65, 70)).toBe('D');
    });
    test("Testing with an average below 60", () => {
        expect(gradeAssignment(30, 22, 6)).toBe('F');
    });
    test("Testing with non-numbers", () => {
        expect(gradeAssignment('Grade')).toBe('');
    });
    test("Testing using 3 numbers above 100, should return A", () => {
        expect(gradeAssignment(101, 150, 162)).toBe('A');
    });
    test("Testing using 3 negetive numbers, should return empty string", () => {
        expect(gradeAssignment(-90, -93, -95)).toBe('');
    });
    test("Testing using floats, should still return A", () => {
        expect(gradeAssignment(90.5, 93.6, 95.6)).toBe('A');
    });
});


// Section A 07. Test the disemvowel() function
describe('Test a07, testing the disemvowel() function', () => {
    test("Testing the function works as expected on a basic string", () => {
        expect(disemvowel('hello world')).toBe('hll wrld');
    });
    test("Testing using a random string generator", () => {
        var letters = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
        var vowels = 'aeiouaeiou';
        var randomString = [];
        for(let i = 0; i < 10; i++){
            randomString.push(letters[Math.floor(Math.random()*letters.length)]);
            randomString.push(vowels[Math.floor(Math.random()*vowels.length)]);
        }
        let output = randomString.join('');
        expect(disemvowel(output)).not.toMatch(/aeiouAEIOU/gi);
        expect(disemvowel(output)).toHaveLength(10);
    });
});



// Section A 08. Test the strEndsWith() function
describe('Test a08, testing the strEndsWith() function', () => {
    test("Testing a string with the correct ending", () => {
        expect(strEndsWith('hello world', 'world')).toBeTruthy();
    });
    test("Testing a string with the incorrect ending", () => {
        expect(strEndsWith('hello world', 'wrong')).toBeFalsy();
    });
});

// Section A 09. Test the removeUrlAnchor() function
describe('Test a09, testing the removeUrlAnchor() function', () => {
    test("Testing a url with no anchor", () => {
        expect(removeUrlAnchor('https://mycool.website.com')).toBe('https://mycool.website.com');
    });
    test("Testing a url with an anchor", () => {
        expect(removeUrlAnchor('https://mycool.website.com#a_super_cool_anchor')).toBe('https://mycool.website.com');
    });
});


// Section A 10. Test the numberToString() function
describe('Test a10, testing the numberToString() function', () => {
    test("Testing a number", () => {
        expect(numberToString(5)).toEqual('5');
        expect(typeof numberToString(5)).toBe('string');
    });
    test("Testing a string", () => {
        expect(numberToString('5')).toEqual('5');
        expect(typeof numberToString(5)).toBe('string');
    });
});