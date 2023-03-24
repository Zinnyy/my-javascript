/*alert('hello, world');
console.log(1);
console.log('what is your name');
let year = 2001;
let age = 21;
let birth = year + age;

console.log(year, age);
console.log(birth);

age = 30;
console.log(age);

const points = 100;
//points = 50
console.log(points)

var score = 75;
console.log(score);


//strings
console.log('hello, world');

let email = 'emmanuelanu129@gmail.com';
console.log(email);

// string concatenation
let firstname = 'Zinny'
let secondname = 'Emmanuel'

console.log(firstname + ' ' + secondname);
let Name = firstname + ' ' + secondname;
console.log(Name)

//getting characters
console.log(firstname[4]);

//string length
console.log(Name.length)

// strings methods
console.log(Name.toUpperCase());
let result = Name.toLowerCase();
console.log(result)

//.indexof() its use to find a character in a string, its also called an arguement or parameters

let index = email.indexOf('9')
console.log(index);*/

//common string method
//let email = 'emmanuelanu170@gmail.com';
//lastindexof() finds the last character in a string
//let result = email.lastIndexOf('a');
//console.log(result) 

//slice
//let result = email.slice(0,9);
//substric
//let result = email.substring(4,10)
//replace
//let result = email.replace('a','e')
//console.log(result)

//NUMBERS
//let radius = 10;
//const pi = 3.12;

//math operators +, -, *, /, **, %
//% means remainder
//** means raise to the power of 
//++ adds addition of 1


//console.log(10/2);
//let result = radius % 3;

//let result = pi * radius**2;

//order of operation-B I D M A S
//B- bracket
//I - indices
//let result = 5  * (10-3)**2;
//console.log(result) 
 
//let like = 4
//like = like + 1;
//like++
//like += 4

//NAN - not a number
//console.log(like)

//let result = 'the blog has ' +  + like + ' likes'
//console.log(result)

//template strings
//const title = 'Best books of 2022';
//const author = 'Mario';
//const likes = 30; 

//concatenation way
//result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'
//console.log(result)

//template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`
//console.log(result)

//creating html template
//let html = `
//<h2>${title}</h2>
//<p>by ${author}</p>
//<span>This blog has ${likes} likes</span>
//`;
//console.log(html)

//let ninjas = ['zinny', 'au', 'baby-gi']
//ninjas[2] = 'kay';
//console.log(ninjas[2])

//let ages = [20,30,45,2,4,5,3]
//console.log(ages.length)

//array methods

//let result = ages.join( ';');
//let result = ages.indexOf('baby-gi');
//let result = ninjas.concat( ['hen', 'flame']);
 //let result = ninjas.push( 'hen');
 //result = ninjas.pop()
//console.log(result)


//boolean & comparison
//console.log(true, false, 'true', false)

//methods can return boolean
//let name = 'davidson'
//let result = name.includes('e')
//console.log(result)

//comparison operators
//let age = 25;
/*console.log(age==25)
console.log(age==30)
console.log(age!=25)
console.log(age!=30)
console.log(age>=30)
console.log(age<=25)
console.log(age<330)
console.log(age>10)*/

/*let name = 'zinny';
console.log(name == 'zinny')
console.log(name != 'zinny')
console.log(name != 'Peter')
console.log(name == 'peter')
console.log(name > 'Zinny')*/


//loose comparison(different types can still be equal)
//let age = 25;
/*console.log(age == '25')
console.log(age == 25)
console.log(age != 25)
console.log(age != '30')


//strict comparison (different types cannot be equal)
console.log(age === '25')
console.log(age === 25)
console.log(age !== '25')
console.log(age !== 25)*/


//type conversion

/*let digit = '1000';
digit = Number(digit)
console.log(digit + 1)
console.log(typeof(digit))

let digit = 50
digit = String(digit);

//let result = Boolean(01)
//console.log(result, typeof(result))


//for loops

for( let i = 0; i < 5; i++){
    console.log('in loop:', i);
}
console.log('loop finished');


const name = [ 'Shaun', 'David', 'Grace'];
for(let i = 0; i < name.length; i++){
    //console.log(name[i]);
    let html = `<div>${name[i]}</div>`;
    console.log(html)
}


//while loop
const names = [ 'Shaun', 'David', 'Grace'];
let i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}
console.log('loop finished')

//do while loop

let namee = ['David', 'shaun', 'makaveli', 'zinny']
let z = 0;
do{
    console.log( 'the value of name is:', namee[z]);
    z++;
}
while(z < namee.length);


//if statement and if else statement

const age = 18;

if(age > 20){
    console.log('you are  over 20 years')
}
 else{
    console.log('you are not over 20 years old')
 }

 //else if statement
const password = 'password'
if(password.length >= 12){
    console.log('that password is strong enough')
}
else if(password.length >=8){
    console.log('the password is long enough')
}
else{
    console.log('that password is not long enough')
}


//logical operator - OR || and AND &&
//&&

const pass = 'p@ssworddd@kdk'
if(pass.length >= 12 && pass.includes('@')){
    console.log('password is mighty strong')
}
    else if (pass.length >= 8){
        console.log('password is long enough')
    }
else{
    console.log('password is not long enough')
}


// || - one of the condition has to be true

const passwords = 'passwo@d12342'
if(passwords.length >= 12 && passwords.includes('@')){
    console.log('this password is mighty strong')
}
else if(passwords.length >=12 || passwords.includes('@')){
    console.log('this password is strong enough')
}
else{
    console.log('this password is not strong and long enough')
}


//logical NOT(!)
 
let user = false;

if (!user){
    console.log('you must be logged in to continue')
}
console.log(!true)
console.log(digit, typeof(digit));
console.log(!user)

//break and continue
//break
const score = [50, 20, 30, 10, 400, 90, 100];

for( let i = 0; i < score.length; i++){

    if (score[i] === 10){
        continue;
    }
    if (score[i] === 20){
        continue;
    }
    if (score[i] === 30){
        continue;
    }
    if (score[i] === 50){
        continue;
    }
    if (score[i] === 90){
        continue;
    }

    console.log('your score: ', score[i])

if(score[i] === 400){
    console.log('congrats, you got the highest score!');
    break;
}
}


//switch statement
//switch use a strict equaty check, i.e string and numbers cant work together
 
const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
        //default shows when nothing is valid in the grade
    default:
        console.log('not a valid grade');
}


//variables and block scope
let bag = 40

if(true){
    let bag = 50 
    let noun = 'shaun'
    console.log('inside 1st code block', bag, noun)
if(true){
    //var test = 'hello world'
    let bag = 60;
    console.log('inside 2nd code block', bag)
}
}

console.log('outside code block', bag)



//FUNCTION

//function declaration
function greet(){
    console.log( 'Hello there');
}

//function expression
const peak = function(){
    console.log('hello there');
};

peak()
greet();
greet();
peak();


//arguement & parameters

const speak = function(name, time){
    console.log(`good ${time} ${name}`)
}
speak('Zinny', 'night');

//returning values

const rank = function(radius){
return 3.14 * radius **2;

}

const area = rank(5)
console.log(area)


//regular function
//const calcArea = function(radius){
//return 3.14 * radius **2;


//arrow function
// we don't use () while using just one function
// we use () when there's 0 or more than 1 function
const calcArea = radius =>{
    return 3.14 * radius**2;
};

const parea = calcArea(5);
console.log(parea)


//not using the {} is the same thing as saying return
const leav = radius => 3.14 * radius**2;

const lear = leav(3)
console.log('the result is:', lear)


//practise arrow function

const great = () => 'hello, world'
 const result = great();
 console.log(result)

 // another practise

const bill = function(products, tax){
    let total = 0
    for(let b = 0; b < products.length; b++){
        total += products[b] + products[b] * tax;
    }
    return total;
} 

const sult = bill([10, 15, 30], 0.2);
console.log(sult)


//function 
const know = () => 'hello'
let resultOne = know();
console.log(resultOne)


//methods
//methods use dot (.) notation
const nme = 'Zinny'
let resultTwo = nme.toUpperCase();
console.log(resultTwo);

//for each & callback

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    console.log(value)
})


//foreach
/*let people = ['mario', 'zinny', 'Sam', 'david', 'Mega']
people.forEach((person, index) =>
    console.log(index, person)
)

//callback

let people = ['mario', 'zinny', 'Sam', 'david', 'Mega']
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson)

//callback function in action
const u = document.querySelector(".people");

const list = ['mario', 'zinny', 'Sam', 'david', 'Mega']

let html = ``;

list.forEach(persan => {
    //create html template
    html += `<li style="color: blue">${persan}</li>`;
});

console.log(html);

u.innerHTML = html;


//OBJECT LITERAL NOTATION
//object make use of {}
//the key and the value

let user = {
    name: 'zinny',
    age: 30,
    email: 'emmanuelanu129@gmail.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']

};

console.log(user)
console.log(user.name)

//how to change a property of an object

user.age = 20;
console.log(user)

//or

console.log(user['name'])
user['name'] = 'Emmanuel'
console.log(user)
console.log(user['name'])
console.log(typeof user)

//const blogs = [
    //{title: 'why mac & cheese rules', likes: 30},
    //{title: '10 things to make with marmite', likes: 50}
//]
//console.log(blogs)

let use = {
    name: 'zinny',
    age: 30,
    email: 'emmanuelanu129@gmail.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('this user logged in')
    },
    logout: function(){
        console.log('the user logged out')
    },
    //(this) is a global function for the window when used outside it context
    //(this) is use to specify a value in an object using the notation sign and the value
    //object doesn't use (=>) function because of the this statement
    logblogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blogs => {
            console.log(blogs)
        })
    }
        //console.log(this.blogs)

            
    


        //another way of writting functions
        /*
        logblogs(){
            console.log('this user has written the followinig blogs:);
        }
        
    }
    


use.login();

use['login']();

use.logout();

use.logblogs();

//math object

console.log(Math)
console.log(Math.PI);
console.log(Math.E)

const area = 2.4
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random Number
//generating random number

const randome = Math.random();
console.log(randome);
console.log(Math.round(randome * 100));

/*const OTP = '0123456789'
OTP = Number(OTP)
for(let a = 5; a > OTP.random; a++){
    console.log(OTP, a)
}


//primitive values
//changes the values when altered

let scoreOne = 50; 
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)
scoreOne = 100

console.log(`scoreOne: ${scoreOne}, scoreTwo:${scoreTwo}`)

//Reference values
//doesnt change both the values when altered
const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo)
userOne.age = 50
console.log(userOne, userTwo)

//interacting with the browser

//DOM
//query the dom

const para = document.querySelector('p');
console.log(para) 

const paras = document.querySelector('.error')
console.log(paras)

const p = document.querySelector('div.error')
console.log(p)

const pS = document.querySelector('body > h1')
console.log(pS)

//queryselectorall

const par = document.querySelectorAll('p')
console.log(par)

console.log(par[0])

par.forEach(par => {
    console.log(par)
})

const errors = document.querySelectorAll('.error')
console.log(errors)

//other ways of query the DOM

//get an element by ID
const ttitle = document.getElementById('page-title');
console.log(ttitle)

//get element by their class name
const tite = document.getElementsByClassName('error');
console.log(tite);
console.log(tite[0])

//we can't use for each for Classname
//tite.foreach(tite =>
  //  console.log(tite))

//get elements by their tag name

const parr = document.getElementsByTagName('p')
console.log(parr);

console.log(parr[2])


//adding & changing page content

const parrr = document.querySelector('p')

//console.log(parrr.innerText);

parrr.innerText += ' we are awesome';

//const page = document.querySelectorAll('p')

//page.forEach(page => {
    //console.log(page.innerText);
    //page.innerText += ' new text'

//})

const content = document.querySelector('.content');

console.log(content.innerHTML);

content.innerHTML += `<h2>This is the main page</h2>`

const people = ['zahra', 'ize', 'miracle', 'atarah']

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});


//getting and setting attributes

const link = document.querySelector('a')

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.instagram.com')
link.innerText = 'instagram website'

const msg = document.querySelector('p')
console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: red')


//changing css styles

const taa = document.querySelector('h1')

//taa.setAttribute('style', 'margin: 50px;')
console.log(taa.style)
taa.setAttribute('style', 'color: orange;')
console.log(taa.style.color)

taa.style.color = 'green'
taa.style.margin = '50px'
taa.style.fontSize = '50px'

//to delete
taa.style.fontSize = ''

//adding and removing classes
//classlist

const cont = document.querySelector('p')
console.log(cont.classList);
cont.classList.add('success');
cont.classlist.remove('error');
cont.classList.add('success');

const paar = document.querySelectorAll('p')

paar.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
    //else(p.classList.add('success'))
    if(p.innerText.includes('success')){
        p.classList.add('success')
    }
});

//to toggle

const titee = document.querySelector('.titee')
titee.classList.toggle('test');
titee.classList.toggle('test')


//parents, children & sibling

const article = document.querySelector('article');
console.log(article.children)
console.log(Array.from(article.children))

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const tittt = document.querySelector('h2')
console.log(tittt.parentElement.parentElement.parentElement)
console.log(tittt.nextElementSibling)
console.log(tittt.previousElementSibling)


//chaining
console.log(tittt.nextElementSibling.parentElement.children)


// Event basics(click events)
//const button = document.querySelector('button')
//button.addEventListener('click', () => {
    //console.log('you clicked me')
//});
const ul = document.querySelector('ul')
//ul.remove()
const item = document.querySelectorAll('li');
const butto = document.querySelector('button')

butto.addEventListener('click', () => {
//ul.innerHTML += `<li>something new</li>`
const li = document.createElement('li')
li.textContent += 'something new'

//prepend is use to carry an assigned function up
//append is use to carry the new value down
//ul.append(li)
ul.prepend(li)


})
//creating & removing elements
/*item.forEach(item => {
    item.addEventListener('click', e => {
        console.log('item clicked in Li')
        //console.log(e)
        //target is use to show the precise value or word you want

        //console.log(e.target)
        //console.log(item)
        e.target.style.textDecoration = 'underline'
        //item.target.remove()

        //how to stop a bubbling we usse stoppropagation
        e.stopPropagation()

    })
});

//event bubbling and delegation

ul.addEventListener('click', e => {
    //console.log('event in ul')
    //console.log(e.target)
    //console.log(e)
    if(e.target.tagName === 'LI'){
        e.target.remove()
    }
})

//other types of events

const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
    console.log('!Hello, my content is copyright')
})

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
//console.log(e)
//offsetX and offsetY
console.log(e.offsetX, e.offsetY)

box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
});


document.addEventListener('wheel', e => {
    //console.log(e);
    box.textContent = ` x wheel -${e.pageX},y wheel - ${e.pageY}`
})*/



//building a popup

/*const button = document.querySelector('button');

const popup = document.querySelector('.popup-wrapper')

const clos = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block';

})

clos.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', () => {
    popup.style.display = 'none'
})*/


/*const r = document.querySelector('.r')

const t = document.querySelector('.t')

const d = document.querySelector('.d')

const s = document.querySelector('.s')

const h = document.querySelector('.h')

r.oninput = c;
function c() {
    t.value = this.value;
    //d.innerText = this.value;
    //s.innerText = this.value;
    //h.innerText = this.value;
    
    
}


document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = 
    document.querySelector('.card-number-input').value
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = 
    document.querySelector('.card-holder-input').value
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = 
    document.querySelector('.month-input').value
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = 
    document.querySelector('.year-input').value
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform =
    'perspective(1000px) rotateY(0deg)'
    document.querySelector('.back').style.transform =
    'perspective(1000px) rotateY(0deg)'
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform =
    'perspective(1000px) rotateY(0deg)'
    document.querySelector('.back').style.transform =
    'perspective(1000px) rotateY(180deg)'
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText =
    document.querySelector('.cvv-b0x').value 
}

//OTP GENERATOR

function generateOTP(limit) {
var nuber = '0123456789';
let OTP = '';
for(let i = 0; i < limit; i++){
    
    OTP += nuber[Math.floor(Math.random())]
}
return OTP;
}

console.log("Random Number Generator1", generateOTP(4) )

*/

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
e.preventDefault();
//console.log(username.value)
//console.log(form.username.value)

const username = form.username.value;


if(usernamePattern.test(username)){
    //feedback good info
    feedback.textContent = 'that username is valid';
    feedback.style.color = 'blue'
} else {
    //feedback help info
    feedback.textContent = '!!!username must contain letters only & be between 6 - 12 characters long';
    feedback.style.color = 'red'

}


})

//keyboard event
//live feedback

form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value )
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'succes')
    }else{
        form.username.setAttribute('class', 'error')
    }


})









//texting Regular Expression (RegEx)

/*const username = 'zinnny5'
const pattern = /[a-z0-9]{1,9}$/

let result = pattern.test(username)

if(result){
    console.log('RegEx test passed :)')
} else{
    console.log('RegEx test failed :(')
}
*/
/*
let result = username.search(pattern);
console.log(result);*/




