function isPangram(string) {
    // define the alphabet
    var letters = "abcdefghijklmnopqrstuvwxyz"
        // make all letters in string lowercase
    string = string.toLowerCase().replace(/[^a-z]/g, '')
        // iterate through up until the length of the alphabet
    for (var i = 0; i < 26; i++)
    // if the string does not include the letter return false
        if (string.indexOf(letters[i]) < 0) return false
        // otherwise return true
    return true
}

/* Checks to see if a string is a pangram by only returning true if every letter is present in the string by running an iterative .indexOf() search. */