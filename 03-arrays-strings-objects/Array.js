// 1. creating an array
// let arr = [10, 20, 30, 40];
// console.log(arr);


// 2.Accesing element of arraysss
// let arr = [10, 20, 30, 40]
// console.log(arr[2]);


// 3. push 
// let arr = [10, 20, 30, 50, 60];
// arr.push(80);
// console.log(arr);


// 4. pop
// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr);



// 5. shift__________shift() Array ke FIRST element ko remove karta hai.
// let arr = [1, 3, 4];
// arr.shift();
// console.log(arr);


// 6. unshift___________unshift() Array ke START/BEGINNING mein element add karta hai.
// let arr = [1, 3, 4];
// arr.unshift(0);
// console.log(arr);



// 7.slice___________slice() Array ke specified index ke beech ka element return karta hai.
// let arr = [1, 2, 3 , 4];
// let result = arr.slice(1, 3);
// console.log(result);



// 8.splice__________splice() Array ke specified index ke beech ka element remove or add, replace karta hai.
// add krega.
// let arr = [10, 23, 45, 60];
// arr.splice(2, 0, 30);
// console.log(arr);


// replace krega.
// let arr = [10, 30, 40, 20];
// arr.splice(2, 1, 90);
// console.log(arr);


// remove krna.
// let arr = [10, 20, 30, 40];
// arr.splice(2, 1);
// console.log(arr);


// concat___________concat() ka kaam do ya usse zyada Arrays ko jodna (combine karna) hota hai.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let combinedArray = array1.concat(array2);
// console.log(combinedArray);



// join _________join() Array ke saare elements ko jodkar ek STRING bana deta hai.
// let arr = ["Hello", "Brother", "how", "are","you?"];
// let result = arr.join(" ");
// console.log(result);


// reverse______reverse() Array ke elements ka order ulta kar deta hai.
// let arr = ["sahjad", "is", "a", "good", "boy"];
// arr.reverse();
// console.log(arr);


// sort_________sort() Array ke elements ko order mein arrange karta hai.
// let arr = [5, 2, 8, 1, 3];
// arr.sort();
// console.log(arr);



// Ascending_____Chhote se bade ki taraf 📈
// let arr = [5,2,3,1,4];
// arr.sort((a, b) => a - b);
// console.log(arr);


// Descending_____Bade se chhote ki taraf 📉
// let arr = [5,4,8,2,3,1];
// arr.sort((a, b) => b - a);
// console.log(arr);


// largest________Largest ka matlab hota hai sabse bada number.
// let arr = [1, 2, 5, 8, 2,9];
// arr.sort((a, b) => b - a);
// console.log(arr[0]);



// largest ________Math.max() use krke 
// let arr = [1, 2, 5, 8, 3, 10, 11];
// let largest = Math.max(...arr);
// console.log(largest);


// smallest __________Math.min()
// let arr = [1, 2, 3, 4, 5,];
// let smallest = Math.min(...arr);
// console.log(smallest);



// sum _______sum ka matlab hota hai Array ke saare numbers ko add karna.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((a,b) => a + b, 0));


// Average________Average (औसत) ka matlab hota hai sabhi numbers ka Sum karke, total numbers se divide karna.
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// let average = sum / arr.length;
// console.log(average);


// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((a , b) => a + b, 0) / arr.length);


// Even________Even number ka matlab hota hai jo number 2 se completely divide ho jaye aur remainder 0 aaye.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = arr.filter(num => num % 2 === 0);
// console.log(evenNumbers);


// odd = _________Jo number 2 se completely divide nahi hota aur remainder 1 aata hai, wo Odd hai.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddNumbers = arr.filter(num => num % 2 !== 0);
// console.log(oddNumbers);



// Removes Dupllicates________
// let arr = [1, 2, 2, 3, 4, 5, 5, 6,7];
// let result = [...new Set(arr)];
// console.log(result);


// second largest ________
// let arr = [4, 5, 2, 6, 9];
// let sorted = [...new Set(arr)].sort((a, b) => b - a);
// console.log(sorted[1]);


// second smallest_________
// let arr = [5, 2, 8, 1, 9];
// let sorted = [...new Set(arr)].sort((a, b) => a - b);
// console.log(sorted[1]);


// Rotate array
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let rotate = [
//     ...new Set(arr.slice(k),
//     ...arr.slice(0, k))];
// console.log(rotate);



// merge __________merge ka simple matlab hota hai 2 ya usse zyada arrays ko jodkar ek array banana. 🔥
// let a = [1, 2];
// let b = [3, 4];
// console.log([...a, ...b]);



// find element___________JavaScript me find() ka kaam hota hai array me se condition ko satisfy karne wala pehla element dhoondhna.
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.find(num => num > 15));


// count accurance _______Count occurrence ka matlab hota hai kisi element ki array me kitni baar occurrence (बार) hui hai, ye count karna.
// let arr = [1, 2, 2, 3, 2, 2, 4];
// console.log(arr.filter(num => num === 2).length);


// includes_________
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(2));



// index off______agar aap indexOf() pooch rahe ho, to iska kaam hota hai array me kisi element ka index (position) dhoondhna.
// let arr = [10, 20, 30, 40];
// console.log(arr.indexOf(20));


// LastIndexof _____-
// let arr = [10, 20, 30, 40, 20];
// console.log(arr.lastIndexOf(20));


// Every _______every() ka matlab hai: array ke KYA SAARE elements condition ko satisfy karte hain?
// let arr = [10, 20, 30, 40];
// console.log(arr.every(num => num > 5));


// Some________"Kya array me kam se kam EK element condition ko satisfy karta hai?"
// let arr = [110, 20, 30, 40];
// console.log(arr.some(num => num > 100));


//  Fill _____-----
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.fill(0, 1, 2));


// Flat_________flat()ka kaam hota hai nested array ko ek level tak simple/flat array banana.
// let arr = [1, [2, 3], [4, 5]];
// console.log(arr.flat());


// FlatMap__________Yaani pehle har element ko transform karta hai, phir resulting nested array ko 1 level flatten karta hai.
// let arr = [1, 2, 3, 4];
// console.log(arr.flatMap(num => [num, num * 2]));



// Practice mix_____
// let arr = [1, 2, 3, 4, 5];
// console.log(
//     arr.sort((a, b) => a - b),
//     Math.max(...arr), 
//     arr.reduce((a, b)=> a + b)
// );



