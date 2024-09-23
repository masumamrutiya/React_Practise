// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// const now = new Date();

// const days = ["Sunday", "Monday", "Tuesday",
//              "Wednesday", "Thursday", "Friday",
//                "Saturday"];

// const day = days[now.getDay()];
// let hour = now.getHours();
// const minute = now.getMinutes();

// const second = now.getSeconds();
// let ampm = "AM";

// // Convert to 12-hour format and set AM/PM
// if (hour >= 12) {
//     ampm = "PM";

//     if (hour > 12) {
//         hour = hour - 12;
//     }
// } else if (hour === 0) {
//     hour = 12;
// }

// console.log(`Today is : ${day}.`);

// console.log(`Current time is : ${hour} ${ampm} : ${minute} : ${second}`);

// function printWindowContents() {
//     window.print();
// }


// // Call the function to print the contents
// printWindowContents();


// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.
const now = new Date();

const day = now.getDate();
const month = now.getMonth() + 1; 
const year = now.getFullYear();

const mdy = month + "-" + day + "-" + year;
const mmddyy = month + "/" + day + "/" + year;
const dmy = day + "-" + month + "-" + year;
const ddmmyy = day + "/" + month + "/" + year;

console.log("mdy:", mdy);
console.log("mmddyy:", mmddyy);
console.log("dmy:", dmy);
console.log("ddmmyy:", ddmmyy);

// 12. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// 15. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort(function (a, b) {
  return a - b;
});

console.log(arr1);

// 11. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0.

let number = [-5, -2, -6, 0, -1];

let largest = Math.max(...number);

alert("The largest number is: " + largest);

//  8.Write a JavaScript program to return the minimum-maximum value of an array.

const array = [3, 5, 1, 8, -2, 4];

const min = Math.min(...array);

const max = Math.max(...array);

console.log("Minimum value:", min);
console.log("Maximum value:", max);

// 10. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

let num1 = 0;
let num2 = -1;

let num3 = 4;

let numbers = [num1, num2, num3];

numbers.sort(function (a, b) {
  return b - a;
});

alert("Sorted numbers: " + numbers.join(", "));

//  9 .Write a JavaScript program to remove specified elements from the left of a given array of elements.

function removeFromLeft(arr, numElements) {
  return arr.slice(numElements);
}

const elements = [1, 2, 3, 4, 5, 6, 7];

const numberToRemove = 3;

const result = removeFromLeft(elements, numberToRemove);

console.log(result);
