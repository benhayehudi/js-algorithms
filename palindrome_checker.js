function isPalindrome(word) {
    let reversed = word.toLowerCase().split('').reverse().join('')
    return reversed === word
}

/* This checks ot see if a given string is a palindrome by creating a new variable to hold the string reversed and then comparing the reversed string to the original string. */