/* let fruits = ['Apple', 'Orange', 'Banana'];
let newArray = [...fruits]; //make real copy of the array, won't affect the older copy so will just print original array
newArray.pop(); //pop doesn't need parameters, just removes last item in list. Same with push (adds to end of list).
//splice can be used to insert, remove, or replace an item
//slice first parameter is start and second is the end. DO NOT include last array.

console.log(newArray); */

/* let fruits = {
    name: 'Apple',
    color: 'Red',
    calories: 45,
}
fruits.type = 'appleType';
fruits.calories = 95; //if the property/key exists, WILL change
console.log(fruits);

let key = 'color';
console.log(fruits[key]);
//to access one specific property in the array get the index of it using []. If not a variable, treat as string
//name of object then dot then name of property.
let operation = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b
}
//arrow function DOES work inside of javascript
console.log(operation.add(2,5));
console.log(operation.sub(2,5)); */

/* let names = {
    name: 'Amy',
    greet: function(){return `Welcome ${this.name}`} //this specific object. CANNOT USE ARROW FUNCTIONS


}
console.log(names.greet(names.name)); */

let fruits = [
    {name: 'Apple', color: 'Red', calories: 95},
    {name: 'Orange', color: 'Orange', calories: 54},
    {name: 'Banana', color: 'Yellow', calories: 195}
]
/* console.log(fruits[1]['color']);
for (let fruit of fruits){//to visit all elements of the array "all the objects"
    for(let key in fruit){//for each object, visit all the keys
    console.log(fruit[key]); //CANNOT use fruit.key because key is a variable
} /*
//used with arrays. For (variable, goes through each element in array) of (array name)
    console.log(fruit);
}
*/
let numbers =[1, 2, 3, 4, 5];
let doubleNumber = numbers.map((num) => num * 2);
console.log(doubleNumber)
//forEach performs operation doesn't store in array
//map makes a new array and the new information will be in that array

let newNumber = numbers.filter((num) => num > 3);
console.log(newNumber)

let larger = numbers.find((num) => num > 3);
console.log(larger)
