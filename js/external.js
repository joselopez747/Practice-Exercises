"use strict"

console.log("Hello from external JavaScript!");

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');
alert ("Great, " + userInput  + ' is my favorite color too!')



// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var littleMermaid = Number (prompt("How many days would you like to rent The Little Mermaid for?"));
// // alert("You want to rent The Little Mermaid for " + littleMermaid + " days");
var brotherBear = Number (prompt("How many days would you like to rent Brother Bear for?"));
// // alert("You want to rent Brother Bear for " + brotherBear + " days");
var hercules = Number (prompt ("How many days would you like to rent Hercules for?"));
// // alert ("You want to rent Hercules for " + hercules + " day");
// //
alert ("Your total will be " + ((littleMermaid * 3) + (brotherBear * 3) + (hercules * 3)) + " dollars.");




//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var google = Number (prompt ("How many hours did you work for Google this week?"));
var amazon = Number (prompt ("How many hours did you work for Amazon this week?"));
var faceBook = Number (prompt ("How many hours did you work for Facebook this week?"));
alert ("Your payment for this week will be " + ((google * 400) + (amazon * 380) + (faceBook * 350)) + " dollars.");




// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var fullClass = confirm("Is the class full?");
var scheduleConflict = confirm("Does this class conflict with your current schedule?");
var enrolled = (fullClass === false && scheduleConflict === false );
alert (enrolled + " you can enroll in this class.");



//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var member = confirm ("Are you a premium member?");
var premiumMember = member === true;
alert (premiumMember + " You qualify for the product offer");
