export function isPalindrome(word) {
    if (typeof word !== 'string') {
        throw new Error("Input must be a string");
    }
    if (!word) {
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(word)) {
        throw new Error("Input must contain only alphabetic characters");
    }
    let reversal = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversal += word[i];
    }
    return word.toLowerCase() === reversal.toLowerCase();
}
