// Import the js file to test
import { isALink } from "../src/client/js/urlHandle"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the input link functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the isALink() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(isALink('https://www.researchgate.net/publication/331054979_The_Spectrum_of_Big_Data_Analytics')).toBe(true);
    })
});