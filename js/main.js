/* Arrays are variables that can hold more than one piece of data. Each piece of data in a array is referred to as an element. */
var myArray = [3, 4, 63, 21, 90, 37282, 72];

/* Instead of one variable, holding one piece of data, you create arrays to hold multiple pieces of data. */
var myVariable = 56;
var mySecondArray = [56,21, 483];

/* When you should use an array:
- If you need a list.
- If you have variables that are related to one another.
- If you need to group related variables together.
*/

var store = 'Publix';
var groceryList = ['Oranges', 'Cereal', 'Grapes', 'Bread'];

/* Arrays in Javascript, can hodl different data types. In other words, a single array can hold numbers, strings, booleans, and even other arrays. */
var mixedArray = ['Boat', 53, '4563', false, 2829];

/* Arrays that hold other arrays inside of tehm, are called multidimensional arrays. */
var multiArray = [
			[23, 'Alan'],
			[54, 'George'],
			[29, 'Amber'],
			[42, 'Emily']
			];

/* Each Element is assigned an index number in an array. to access the element, you would reference its index number. We call this, 'accssing an array'. */
var partyGuests = ['Jeff', 'Carrie', 'Brad', 'Joey'];
document.write('<br>' + partyGuests[1]);

/* Javascript and most other programming languages begin counting at 0 instad of 1. Therefore, if an element in an array is in thrid place, its index number would actually be 2. */
document.write('<br>' + partyGuests[3]);

/* Multidimensional Arrays are assigned to hold as many arrays as you want. However, it is advisible to keep the level of 'abstraction' to no more than 3. */
var luckyNumbers = [
			[59, 32, 90],
			[21, 89, 24],
			[87, 34, 77]
];

/* In order to access elements in a multidimensional array, you have to reference the index number of the array itself, then of the leement inside of that array. */
document.write('<br>' + luckyNumbers [1] [1]); // the aray, the element

// Write to the document, the number 90 and the number 87 using the array acessing method.

document.write('<br>' + luckyNumbers [0] [2]);
document.write('<br>' + luckyNumbers [2] [0]);

/* You can modify variables after they have been declared by declaring the same variable again with the same nambe but a different value. */
var rainbow = 'unicorn';
document.write('<br>' + rainbow);
var rainbow = 'fairy';
document.write('<br>' +rainbow);

/* Elements inside of an array can also be changed. They can be manipulated, shifted, deleted, yuo can even add elements to an array using code. */
var changedArray = ['Milk', 'Honey', 'Tea'];
document.write('<br>' +changedArray);
changedArray[2] = 'Sugar';
document.write('<br>' +changedArray);

/* Arrays come with their own methods. Some of the more popular methods include push(), pop(), shift(), and unshift(). These were made to manipular and change arrays. */

// push() is used to add elements to the end of an array.
var cookieRecipe = [ 'Flour', 'Baking Soda', 'Sugar'];
document.write('<br>' + cookieRecipe);
cookieRecipe.push('Butter', 'Eggs', 'Vanilla');
document.write('<br>' + cookieRecipe);


// pop() is used to remove the last element from an array.
var soup = ['Water', 'Salt', 'Carrots', 'Seasonings'];
document.write('<br>' + soup);
soup.pop();
document.write('<br>' + soup);

// shift() is ued to remove the first elemtn in a an array. 
var burgerRecipe = ['Bun', 'Lettuce', 'Patty', 'Onions', 'Ketchup'];
document.write('<br>' + burgerRecipe);
burgerRecipe.shift();
document.write('<br>' + burgerRecipe);

// unshift() is used to add elements to the beginning an array.
var pizza = ['Dough', 'Sauce', ' Pepperoni', 'Cheese'];
document.write('<br>' + pizza);
pizza.unshift('Olives');
document.write('<br>' + pizza);

/* Create an array, that populates itself using push() or unshift() based upon user prompt. Populate your array with at least three elements */
/*
// Without Loop
	
	//Declare an empty array to hold out user's inputs
var games = [];
	
	//Declare three vairaiables that will hold the prompt methods for our user.
var game1 = prompt('Take Away your Least Favorite Game');
var game2 = prompt('Take Away your Least Favorite Game');
var game3 = prompt('Take Away your Least Favorite Game');

// Push the above three vairables into our groceries array.
games.push(game1 + game2 + game3);
document.write('<br>' + games);

*/
//With For Loop

var games5 = [];

for (var i = 0; i < 3; i++) {
	var items = prompt('Enter your Favorite games');
	games5.push('' + items);
}

document.write('<br>Games List'+ games5);



























