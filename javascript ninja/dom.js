/*const para =  document.querySelector('p');
console.log(para);
const div = document.querySelector('div.error');
console.log(div);
//querySelectorAll
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
})
console.log(paras[0]);

//get an element by id
const title = document.getElementById('dom-title');
console.log(title);

//get an element by class
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

//get element by their tag name
const tagname = document.getElementsByTagName('p');
console.log(tagname);
console.log(tagname[1])

//const para = document.querySelector('p')
//console.log(para.innerText);
//para.innerText = ' ninjas are awesome';

const para = document.querySelectorAll('p');
para.forEach(para => {
    console.log(para.innerHTML);
    para.innerText += ' new word';

})

const content = document.querySelector('.content')
//content.innerHTML = '<h2>ANOTHER BEGINING OF LIFE</h2>'
//console.log(content.innerHTML)

const people = ['zinny', 'sam', 'david'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});*/

const link = document.querySelector('a');
console.log(link.getAttribute('href'))
link.setAttribute('href', 'www.facebook.com');
link.innerHTML = 'the conspiracy'

const mssg = document.querySelector('.run')
console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'this is the new message')
mssg.setAttribute('style', 'color:red')

const title = document.querySelector('h1');
console.log(title.style)
console.log(title.style.color)
title.style.border = '20px';
title.style.backgroundColor = 'green'; 
title.style.margin = '50px';
title.style.color = 'white';
title.style.borderColor  = 'red';
title.style.padding = '10px';
title.style.borderRadius = '10px';
title.style.display = 'inline-block';
//to remove style
//title.style.margin = ''