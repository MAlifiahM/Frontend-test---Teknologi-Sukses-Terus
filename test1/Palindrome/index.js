function palindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

module.exports = palindrome;