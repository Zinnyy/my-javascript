/*

//store data in local storage

localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50)


//retrieve or get data from local storage

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')
console.log(age, name)

//updating data 

localStorage.setItem('name', 'zinny')
localStorage.age = '40';

name = localStorage.getItem('name')
age = localStorage.getItem('age')
console.log(name, age)

//deleting data in local storage

//localStorage.removeItem('name')

localStorage.clear();

name = localStorage.getItem('name')
age = localStorage.getItem('age')
console.log(name, age)


//stringifying and parsing data


const todos = [
    {text: 'play mariokart', author: 'zinny'},
    {text: 'buy milk', author: 'Emmanuel'},
    {text: 'play a car', author: 'Femi'}

];

//console.log(JSON.stringify(todos))

localStorage.setItem('todos', JSON.stringify(todos))

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored))


localStorage.clear();

*/


//oop
// object oriented programming
