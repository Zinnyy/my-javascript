/*console.log(1);
console.log(2);

let age = 25;
let year = 2019;
console.log(age,year);

age = 30;
console.log(age);

const point = 100;

console.log(point);
//alert('hello world');
//point = 50;
//console.log(point)

var score = 75;
console.log(score);*/

/*//string
console.log('hello, world');

let email = 'emmanuelanu129@gmail.com';
console.log(email);

//string concatenation
let firstName = 'brandon';
let lastName = 'sanderson';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[3]);

//string length 
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase();
console.log(result)

let index = email.indexOf('@');
console.log(index)*/

// common string methods
//let gmail = 'emmanuelanu129@gmail.com';

//let result = gmail.lastIndexOf('m');

//let result = gmail.slice(0, 11);
//let result = gmail.substring(4,10);

/*let result = gmail.replace('g', 'e')
console.log(result);

let radius = 10;
const pi = 3.14

console.log(radius, pi)

//math operator +, -, *, /, **, %
//console.log(10/2);
//let resul = pi * radius**2

// order of operation B I D M A S

let resul = 5 * (10-3)**2;
console.log(resul);*/

/*let likes = 10
//likes = likes + 1;
//likes++
//likes += 10; 
//likes -= 5; 
//likes *= 2;
//likes /= 2;
console.log(likes)

//console.log(5 / 'hello');

let result = 'the blog has ' + likes + ' like';
console.log(result )*/


const title = 'Best reads of 2022';
const author = 'Mario';
const likes = 30;

//concatenation way
 //let result = 'The blog called '  + title + ' by ' + author + ' has ' + likes + ' likes';
 //console.log(result)

 //template string way
 let besult = `The blog called ${title} by ${author} has ${likes} likes`;
 console.log(besult)

 //creating html templates
 let html = `
 <h2>${title}</h2>
 <p>${author}</p>
 <span>this blog has ${likes} likes</span>
 `;

 console.log(html)

 //array

//let ninja = ['zinny', 'Anu', 'Emma'];
//ninja[2] = 'ken'; 
//console.log(ninja[2]);

let random = ['shaun', 'crystal', 30, 20]
console.log(random.length)


// array method
//let ress = random.join('-');
//let ress = random.indexOf(30);
//let ress = random.concat('jim', 'ress')
let ress = random.push('jim');
ress = random.pop();
console.log(ress);

//boolean
console.log(true, false)

//methods can return boolean
let email = 'emma@gmail.com'
//let reee = email.includes('@')
let chri = ['genie', 'browser', 'mach'];
console.log(email.includes('@'))
console.log(chri.includes('geni'))

//comparison operator
let age = 33;
console.log(age == 33);
console.log(age == 22);
console.log(age != 20);
console.log(age != 33);
console.log(age > 20);
console.log(age < 33);
console.log(age <= 33);
console.log(age >= 33);

let namee = 'david'
console.log(namee == 'david')
console.log(namee == 'David');
console.log(namee > 'anu');
console.log(namee > 'Enu');

console.log('another comparison')
console.log(age == 33);
console.log(age == '33');

//strict compaprison(different types cannot be equal)
console.log(age === 33);
console.log(age === '33');
console.log('another negate comparison')
console.log(age !== 33);
console.log(age !== '33');


//type conversion
let score = '100'
//score = Number(score)
//console.log(score + 1);
//to check type of your variable or value
//console.log(typeof(score))

//converting of strings to numbers and numbers to string
//let green = Number('hello')
//console.log(green)
let green = String(50)
console.log(green)

//converting to boolean
let yello = Boolean(0)
console.log(yello, typeof(yello))
//0 is a false value in boolean while 100 is a true value in boolean
//string integer is a true value in boolean 


//for loop

//for(let i = 0; i < 5; i++){
    //console.log('in loop:', i)
//}
//console.log('loop finished');

//looping for many data in a database
const names = ['china', 'usa', 'Nigeria'];
for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    //for html template
    let html = `<div>${names[i]}</div>`;
    console.log(html)
}

//while loop
let i = 0;
while(i < 5){
    console.log('in loop', i);
    i++;
}

const red = ['green', 'blue', 'brown'];
let r = 0;
while(r < red.length){
    console.log(red[r]);
    r++;
}

//do while
let b = 4;
do{
    console.log('val of b is:', b)
    b++;
}
while(b < 5);


//if statement
const ege = 29
if(age < 35){
    console.log('You are over 20 years old');
}

const ninjas = ['minga', 'femi', 'bella', 'ayo']
if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}

//else if statememt
const password = 'password';
if(password.length >= 12){
    console.log('that password is mighty strong')
}
//else if
else if(password.length >= 8){
    console.log('the password is long enough')
}
else{
    console.log('password is not long enough')
}

//logical operators OR (||) and AND (&&)
const passwod = 'p@ssw';
if(passwod.length >= 12 && passwod.includes('@')){
    console.log('that password is mighty strong')
}
//else if
else if(passwod.length >= 8 || passwod.includes('@') && passwod.length >= 5){
    console.log('the password is strong enough')
}
else{
    console.log('password is not strong enough')
}

//logical not(!)
let user = false;
if(!user){
    console.log('you must be logged in to continue');
}
console.log(!user)

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];
for(let g = 0; g < scores.length; g++){
if(scores[g] === 0){
continue;
}
console.log('your score: ', scores[g])

if(scores[g] === 100){
    console.log('congrats you got the top score!');
        break;
}
}

//switch statement

const rade = 'd'
//rade = Number(rade)
switch(rade){
    
        case 'a':
        console.log('you got an a!');
        break;
        case 'b':
        console.log('you got an b!');
        break;
        case 'c':
        console.log('you got an c!');
        break;
        case 'd':
        console.log('you got an d!');
        break;
        case 'e':
            break
        console.log('you got an e!');
        default:
            console.log('not a valid grade')

}

//variables & block scope 
let lage = 30;
if(true){
    let lage = 40;
    let naem = 'shaun'
    console.log('inside 1st code block: ', lage , naem);
}

console.log('outside code block: ', lage );

//function declaration
 function greet(){
    console.log('hello there')
 }
 //function expression

 /*greet();  
 greet ();*/
 const speak = function(){
  console.log('have a good day')  
 };
 speak();
 speak();

 //arguements & parameters
 const peak = function(mane = 'Mr fred', comp = 'have a nice day')/*parameters*/{
    console.log(`good day ${mane}, ${comp}`);
 };
peak();
 peak('Gentlemen'); //arguement

 //returning value
const calArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
    /* or
    return 3.14 * radius**2*/ 
}
const area = calArea(5);
 console.log(area)

//regular function and arrow function
//regular function
const calare = function(radius){
    return 3.14 * radius**2
}

//arrow function
const calarea = (radius) => 3.14 * radius**2;
//another way of returning value
const rea = calarea(5)
console.log('the area is: ', rea);


//practise arrow function
//const greet = function(){
    //return 'hello, world';
//};

const gret = () =>  'hello, world'

const test = gret();
console.log(test);

const bill = function(product, tax){
    let total = 0;
    for(let k = 0; k < product.length; k++){
        total += product[k] + product[k] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));


const mean = 'david'
//functions

const ger = () => 'hello';
let resultone = ger()
console.log(resultone.toUpperCase())
//method

console.log(mean.toUpperCase())

//callback & foreach

const myFunc = (callbackFunc) => {
    //do something
    let valii = 50;
    callbackFunc(valii);
};
myFunc(function(valii){
    //do something
    console.log(valii);
});

//foreach

let people = ['memo', 'ifeoma', 'chichi', 'dolor', 'ryu'];
const logPerson = (person, index) => {
    console.log(`${index} - ${person}`)
};
people.forEach(logPerson);

//example on how to use a foreach
const ul = document.querySelector('.peep');
const peep = ['Sayo', 'Anu', 'seun', 'ay', 'grace']
let htmll =   ``;
peep.forEach(pple => {
    //creating html template
    htmll += `<li style="color: purple">${pple}</li>`;
});
console.log(htmll);
//ul.innerHTML = htmll;


//object literals

let useer = {
    namess: 'Emma',
    ages: 20,
    emails: 'emmanuelanu129@gmail.com',
    location: 'Nigeria',
    blogs: [
    { titles: 'why mac & cheese rules',  like: 30 },
    { titles: ' 10 things to make with marmite', like: 50 },
],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
    //console.log(this.blogs); 
    console.log('this user has written the following blogs');
    this.blogs.forEach(blogs => {
        console.log(blogs)
    });
    },
}


console.log(useer);
console.log(useer.emails);
//changing values
useer.ages = 36
console.log(useer.ages)
//using square bracket notation
console.log(useer['namess']);
useer['namess'] = 'Femi'
console.log(useer['namess'])
console.log(typeof useer);
useer.login();
useer.logout();
useer.logBlogs();
//console.log(this)

/*const blogs =[
    {titles: 'why mac & cheese rules',  like: 30},
    { titles: ' 10 things to make with marmite', like: 50}
];

console.log(blogs)*/

//Math object

console.log(Math)
console.log(Math.PI)

const big = 7.7;
console.log(Math.round(big));
console.log(Math.floor(big));
console.log(Math.ceil(big));
console.log(Math.trunc(big));

//to generate randome numbers

const randome = Math.random()
console.log(randome) ;
console.log(Math.round(randome * 100));

//primitive values

let scoreOne= 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

const userOne = { about: 'ryu', agg: 30}
const userTwo = userOne
console.log(userOne, userTwo);
 userOne.about = 'zinny'
 console.log(userOne, userTwo)

 //how to generate otp
 function generateOTP(){
 var digits = '0123456789';
 let OTP = '';
 for(let r = 0; r < 6; r++){
    OTP += digits[Math.floor(Math.random() * 10)];  
    
    console.log(OTP);
 }
 return OTP;
 
 
 }
 generateOTP();
 generateOTP();
