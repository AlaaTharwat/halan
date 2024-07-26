//TWO POINTERS
let palindrome = (text) => {
    let left = 0, right = text.length  -1;

    while(left < right){
        if(text[left++] != text[right--]) return false
    }

    return true
}

var isPalindrome = palindrome("level")
console.log(isPalindrome)
