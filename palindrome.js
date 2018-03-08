'use strict';

const palindromeChecker = function(sentence) {
 const input = sentence.toLowerCase().replace(/\s/g,'').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
 const result = sentence.split('').reverse().join(' ').replace(/\s/g,'').toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
 console.log(input);
 console.log(result);
 console.log(input === result);
};

palindromeChecker('wow');
palindromeChecker('Was it a car or a cat I saw');
palindromeChecker('A man, a plan, a canal, Panama!');
palindromeChecker('This is a palindrome.');