// Jab inner function, outer function ke variables ko outer function khatam hone ke baad bhi access kar pata hai, use Closure kehte hain.

// function outer() {
//     let name = "Nazir";

//     function inner() {
//         console.log(name);
//     }
//     inner();
// }
// outer();



// function outer() {
//     let name = "Nazir";

//     function inner() {
//         console.log(name);
//     }
//     return inner;
// }
// let result = outer();
// result();



// function counter() {
//     let count = 0;
    
//     function increment () {
//         count++;
//         console.log(count);
//     }
//     return increment;
// }
// let counter1 = counter();

// counter1();
// counter1();
// counter1();



// function locker() {
//     let password = 1234;

//     function openLocker() {
//         console.log(password);
//     }
//     return openLocker;
// }
// let open = locker();
// open();




// function bankAccount() {
//     let balance = 1000;

//     return {
//         deposit: function(amount) {
//             balance += amount;
//         },
//         checkBalance: function() {
//             console.log(balance);
//         }
//     };
// }
// let account = bankAccount();
// account.checkBalance();




// function banklBalance (){
//     let balance = 1000;

//     return {
//         deposite: function(amount){
//             balance += amount;
//         },
//         checkBalance: function() {
//             console.log(balance);
//         }
//     };
// }
// let account = banklBalance();
// account.checkBalance(); //1000

// account.deposite(500);

// account.checkBalance(); // 1500

// account.deposite(200);

// account.checkBalance();



// function bankAccount() {
//     let balance = 1000;

//     return {
//         deposit: function(amount) {
//             balance += amount;
//         },

//         checkBalance: function() {
//             console.log(balance);
//         }
//     };
// }

// let account = bankAccount();

// account.deposit(300);
// account.deposit(700);
// account.deposit(200);

// account.checkBalance();



// clouser with multiple functions______________________

// function bankAccount() {
//     let balance = 1000;

//     function deposit(amount) {
//         balance += amount;
//     }

//     function withdraw(amount) {
//         balance -= amount;
//     }

//     function checkBalance() {
//         console.log(balance);
//     }

//     return {
//         deposit,
//         withdraw,
//         checkBalance
//     };
// }

// let account = bankAccount();
// account.deposit(500);
// account.withdraw(200);
// account.checkBalance();




// Private variables using Clouser_______________
// Aisa variable jise hum function ke bahar se directly access ya change nahi kar sakte, balki sirf kuch specific functions ke through access kar sakte hain.

// function user() {
//     let password = "12345";

//     function getPassword() {
//         console.log(password);
//     }

//     return getPassword;
// }

// let showPassword = user();

// showPassword();



// function bankAccount() {

//     let balance = 1000;

//     function deposit(amount) {
//         balance += amount;
//     }

//     function checkBalance() {
//         console.log(balance);
//     }

//     return {
//         deposit,
//         checkBalance
//     };
// }
// let account = bankAccount();
// account.deposit(500);
// account.checkBalance();