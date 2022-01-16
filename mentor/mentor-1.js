// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check number. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 5.	You need to calculate tip amount and total sum to pay.
// 6.	Show message: (example). Use ”alert” function
// Check number: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230
// const checkNumber = prompt('Введите сумму чека:');
// const tip = prompt('Введите процент чаевых:');
// if (checkNumber === null || tip === null) {
//   alert('Отмена');
// } else {
//   const secondNumber = Number.parseFloat(checkNumber);
//   const secondTip = Number.parseFloat(tip);
//   if (
//     Number.isNaN(secondNumber) ||
//     Number.isNaN(secondTip) ||
//     secondNumber < 0 ||
//     secondTip < 0 ||
//     secondTip > 100
//   ) {
//     alert('Не валидные данные');
//   } else {
//     const tipAmount = Number(((secondNumber * secondTip) / 100).toFixed(2));
//     const totalSumToPay = secondNumber + tipAmount;
//     alert(
//       `Check number: ${secondNumber} : Tip ${secondTip}% Tip amount: ${tipAmount}  Total sum to pay: ${totalSumToPay}`,
//     );
//   }
// }

// 2
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”
// const input = prompt('Вводи слово');
// if (input === null || input.trim() === '') {
//   alert('Invalid value');
// } else {
//   const lengthString = input.length;
//   if (lengthString % 2 === 0) {
//     const startIndex = lengthString / 2 - 1;
//     const endIndex = startIndex + 2;
//     //     console.log(startIndex);
//     //     console.log(endIndex);
//     alert(input.slice(startIndex, endIndex));
//   } else {
//     const centralIndex = Math.floor(lengthString / 2);
//     alert(input.slice(centralIndex, centralIndex + 1));
//   }
// }

// 3
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

const currentHours = new Date().getHours();
console.log(currentHours);
let time = '';
if (currentHours > 5 && currentHours < 20) {
  time = 'day';
} else {
  time = 'evening';
}

const askLogin = prompt('Введи свой логин');
// if (askLogin === null || askLogin === '') {
//   alert('Canceled.');
// } else if (askLogin.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols");
// } else if (askLogin === 'User' || askLogin === 'Admin') {
// 	const getPassword = prompt('Введи пароль');

//   if (getPassword === null || getPassword === '') {
//     alert('Canceled');
//   } else {
//     if (askLogin === 'User' && getPassword === 'UserPass') {
//       alert(`Good ${time}, dear User!`);
//     } else if (askLogin === 'Admin' && getPassword === 'RootPass') {
//       alert(`Good ${time}, dear Admin!`);
//     } else {
//       alert('Wrong password!');
//     }
//   }
// } else {
//   alert("I don't know you");
// }
if (askLogin === null || askLogin === '') {
  alert('Canceled.');
} else if (askLogin.length < 4) {
  alert("I don't know any users having name length less than 4 symbols");
} else if (askLogin === 'User' || askLogin === 'Admin') {
  const getPassword = prompt('Введи пароль');

  if (getPassword !== null && getPassword !== '') {
    if (askLogin === 'User' && getPassword === 'UserPass') {
      alert(`Good ${time}, dear User!`);
    } else if (askLogin === 'Admin' && getPassword === 'RootPass') {
      alert(`Good ${time}, dear Admin!`);
    } else {
      alert('Wrong password!');
    }
  } else {
    alert('Canceled');
  }
} else {
  alert("I don't know you");
}
