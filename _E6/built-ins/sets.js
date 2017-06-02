/*
SETS

In a a set each value is unique and appears only once.
Sets are not indexed-based - you do not refer to items in a set based on their position in the set
items in a Set can’t be accessed individually

*/
const games = new Set();
console.log(games);

const games1 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games1);

//example above automatically removes the duplicate entry "Super Mario Bros." when the Set is created

/*Modifying sets*/

// Add , delete,  clear
games1.add('Banjo-Tooie');
games1.add('Age of Empires');
games1.delete('Super Mario Bros.');
console.log(games1);

games1.clear()
console.log(games1);

/*
If you attempt to .add() a duplicate item to a Set, you won’t receive an error, 
but the item will not be added to the Set. Also, if you try to .delete() an 
item that is not in a Set, you won’t receive an error, and the Set will remain unchanged. 
Both methods return true if an item is successfully added or deleted from the Set and false if unsuccessful.
*/

/*Working with sets*/
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

console.log(months.size); //get size

console.log(months.has('September'));// true: check if an item exists

console.log(months.values()); // retrieve all values
// .keys() method will behave the exact same way as the .values() 

/*Using Set iterator*/
const iterator = months.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*for of*/
for (const month of months) {
  console.log(month);
}
