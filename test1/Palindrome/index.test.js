const palindrome = require('./index');

test('Check if "racecar" is palindrome', () => {
    expect(palindrome('racecar')).toBe(true);
});

test('Check if "hello" is not palindrome', () => {
    expect(palindrome('hello')).toBe(false);
})