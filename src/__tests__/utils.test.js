import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it("Should return true for words that are a combination of uppercase and lowercase letters", () => {
        let word = "mom";
        let palindrome = isPalindrome(word);
        expect(palindrome).toBe(true);
    });

    it("Should return false for an empty string", () => {
        let word = "";
        let palindrome = isPalindrome(word);
        expect(palindrome).toBe(false);
    });

    it("Should throw an error if input has any non-alphabetic characters", () => {
        let word = "!!!";
        expect(() => isPalindrome(word)).toThrow('Input must contain only alphabetic characters');
    });
    it("Should throw an error if input is not a string", () => {
        let nonStringInput = 12345;
        expect(() => isPalindrome(nonStringInput)).toThrow('Input must be a string');
    });

    it("Should throw an error if input is an array", () => {
        let nonStringInput = ["mom"];
        expect(() => isPalindrome(nonStringInput)).toThrow('Input must be a string');
    });

    it("Should throw an error if input is an object", () => {
        let nonStringInput = { word: "mom" };
        expect(() => isPalindrome(nonStringInput)).toThrow('Input must be a string');
    });
});
