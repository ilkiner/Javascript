function isPalindrome(x) {
    
    
    let str = x.toString();
    
   
    
    str = str.toLowerCase().replace(/\s+/g, '');  

    
    
    let reversedStr = str.split('').reverse().join('');

    
    
    return str === reversedStr;
}
console.log(isPalindrome("222"));






// function isPalindromeFlexible(x) {
//     if (x < 10) {
//         return true;
//     }

    
//     if (x >= 10) {
//         return false;
//     }
    
//     str = str.toLowerCase().replace(/\s+/g, '');  

    
//     let reversedStr = str.split('').reverse().join('');

    
//     return str === reversedStr;
// }
// console.log(isPalindrome("22"));



// let newPersons=["bir","iki","uc","dord"]