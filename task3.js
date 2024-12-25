// 1. Write a program using for loop to print Numbers from 1 to 10.

for (let i = 0; i <= 10; i++){
    console.log(i)
}

// 2. Write a program using while loop to sum of Numbers from 1 to 100.

let j = 0;
while (j <= 100){
    console.log(j);
    j++;
}

// 3. Write a program using for loop to print all even numbers between 1 and 20.

for (let even = 0; even <=20; even++){
    if (even% 2 == 0)
        console.log(even);
        
}

// 4. Write a program using while loop to reverse the string (Softwarica)

let string = "Softwarica";
let reverse = "";
let index = string.length - 1;

while (index >= 0){
    reverse += string[index]
    index--;
}

console.log(reverse)

// 4. Write a program to find the largest number of Array [5, 8, 12, 3, 7]

let numbers = [5, 8, 12, 3, 7];
let largestnumber = numbers[0]

for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > largestnumber){
        largestnumber = numbers[i];
    }
}

console.log("The largest number on this array is "+ largestnumber)

// 5. Write a program using a for loop to print the multiplication table of a given number (e.g., 5).

let multi = prompt("Enter your number");

for (let i = 0; i <= 10; i++){
    console.log(`${multi} x ${i} = ${multi * i}`);
}

// 6. Write a program using a while loop to count the number of digits in a given number.

let digit_number = prompt("Enter your number: ");

let digit_count = 0;
if (digit_number < 0) {
    number = Math.abs(digit_number);
}

while (digit_number > 0){
    digit_number = Math.floor(digit_number / 10)
    
    digit_count++;
}
console.log(digit_count);

// 7. Write a program using a for loop to generate the first 10 numbers of the Fibonacci sequence.

let n = 10;
let fib = [0, 1];

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("First 10 numbers of the Fibonacci sequence:", fib);

// 8. Write a program using a while loop to calculate the sum of digits of a given number.

let number = 12345;
let sum = 0;

if (number < 0) {
    number = Math.abs(number);
}

while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log("Sum of digits:", sum);

// 9. Write a program using a for loop to count the number of vowels in a given string (e.g., "Softwarica").

let str = "Softwarica";
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}

console.log("Number of vowels:", count);

// 10. Write a program using a while loop to check if a given string is a palindrome (reads the same backward as forward).

let palindrome = "racecar";
let isPalindrome = true;
let left = 0;
let right = str.length - 1;

while (left < right) {
    if (palindrome[left] !== palindrome[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}

console.log("Is the string a palindrome?", isPalindrome);