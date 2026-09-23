// let a = "Hello";
// let b = 'Hello';
// let c = `Hello`;



// 1. Length
// let str = "Nazir";
// console.log(str.length);


// 2. indexing
// let name = "Nazir";

// console.log(name[0]); // N
// console.log(name[1]); // a
// console.log(name[2]); // z
// console.log(name[3]); // i
// console.log(name[4]); // r


// 3. Uppercase()   //String ko CAPITAL letters me convert karta hai.
// let str = "Javascript";
// console.log(str.toUpperCase());


// 4. Lowercase()   //Capital letters ko small letters me convert karta hai.
// let name = "SanDy";
// console.log(name.toLowerCase());


// 5. Reverse()
// split("") → String ko characters ke array me todta hai.
// reverse() → Array ke elements ko ulta karta hai.
// join("") → Array ko wapas String bana deta hai.
//             |

// let str = "Nazir";
// let reversed = str.split("").reverse().join("");
// console.log(reversed);


// 6. palindrome() Jo word/number seedha aur ulta same ho, use Palindrome kehte hain.
    //   ex. madam → madam ✅
// level → level ✅
// 121   → 121   ✅


// let str = "madam";
// let reverse = str.split("").reverse().join("");

// if (str === reverse) {
//     console.log("palindrome");
// } else {
//      console.log("Not palindrome");
// }

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));


// 7. Count vowals______________
// let str = "javascript";
// let count = str.split("").filter(c => "aeiou". includes(c)).length;
// console.log(count);


// 8. count consonants_____________
// let str = "javascript";
// let count = str.split("").filter(c => /[a-z]/.test(c) && ! "aeiou".includes(c)).length;
// console.log(count);


// 9.count words()______ Count Words ka matlab hai string me kitne words hain.
// let str = "I am learning javascript";
// console.log(str.split(" ").length);


// 10. count spaces______Count spaces ka matlab hai string me kitne " " spaces hain.
// let stre = "I am learning javascript";
// console.log(stre.split(" ").length - 1);


// 11. Replace_________kisi text ko dusre text se badalna.
// let str = "i am learning python";
// console.log(str.replace("python", "javascript"));


// trim______trim() ka kaam hai string ke start aur end ke extra spaces ko remove karna.
// let name = "   Hello Nazir   ";
// console.log(name.trim());



// split______________Comma ke basis par tod sakte hain
// split() → String ko todta hai → Array banata ha
// let fruits = "Apple,banana,mango";
// console.log(fruits.split(","));


// join ______join(), split() ka almost ulta kaam karta hai.
// let arr = ["Hello", "World"];
// console.log(arr.join(" "));


// includes____includes() ka kaam hai check karna ki koi particular value/string ke andar मौजूद है ya nahi.
// let str = "javascript";
// console.log(str.includes("script"));


// startsWith_________startsWith() ka kaam hai check karna ki string kisi particular text se start ho rahi hai ya nahi.
// let str = ";javascript";
// console.log(str.startsWith("java"));


// EndsWith________endsWith() ka kaam hai check karna ki string kisi particular text par END ho rahi hai ya nahi.
// let str = "Hello";
// console.log(str.endsWith("lo"));


// slice_________slice() ka kaam hai string ke andar se ek particular part nikalna.
// let str = "javascript";
// console.log(str.slice(0, 4));


// Substring_______substring() bhi slice() ki tarah string ka ek particular part nikalta hai.
// let str = "Nazir";
// console.log(str.substring("1, 3"));


// Repeat___________repeat() ka kaam hai ek string ko baar-baar repeat karna.
// let str = "hello ";
// console.log(str.repeat(4));



// character frequency_______String me har character kitni baar aaya hai, uska count nikalna.
// let str = "javascript";
// let freq = {};
// for (let ch of str){
//     freq [ch] = (freq[ch] || 0) + 1;
// }
// console.log(freq);



// remove dublicate ____________Remove Duplicate Characters ka matlab hai string me jo character baar-baar aa raha hai, use sirf ek baar rakhna.
// let str = "programming";
// let result = [...new Set(str)].join("");
// console.log(result);



// Capitalize_______Capitalize ka matlab hota hai string ke first character ko capital letter banana.
// let str = "javascript";
// let result = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(result);


// Longest word________Longest Word ka matlab hai sentence me sabse bada word find karna.
// let sentence = "I love javascript Programming";
// let words = sentence.split(" ");
// let longest = words.reduce((a, b) => a.length > b.length ? a : b);
// console.log(longest);




// sortest word______
// let sentence = "I am Nazir Ansari";
// let word = sentence.split(" ");
// let shortest = word.reduce((a, b) => a.length < b.length ? a : b);
// console.log(shortest);hj



// Anagram_______Do strings me same characters same quantity me hon, bas unka order alag ho, to wo Anagram hain.
// ex - listen, silent ye dono h same quantity k hain.
// function isAnagram(a, b) {
//     return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(isAnagram("listen", "silent"));
