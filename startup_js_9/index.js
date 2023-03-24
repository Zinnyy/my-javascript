//rest parameters

const number = (...nums) => {

    console.log(nums)
    return nums.map(num => num*2)
}
const numm = number(1,2,3,4,5,6,7,8)
console.log(numm)


// spread syntax (array)

const people = ['shola', 'jeff', 'micheal', 'zayn', 'malik']
const members = ['faith', 'great', 'peter', ...people]
console.log(...people)
console.log(members)

//spread syntax (objects)

const person = { name: 'shola', age: 30, job: 'system engineer'}
const personClone = {...person, location: "manchester"}
console.log(personClone)

//sets
//it removes duplicated words

const namesArray = ['ben', 'chris', 'ben', 'joshua', 'kelvin']
console.log(namesArray)

//const namesSet = new Set(['ben', 'chris', 'ben', 'joshua', 'kelvin'])
// const namesSet = new Set(namesArray)
// console.log(namesSet)

// const uniqueNames = [...namesSet]
// console.log(uniqueNames)

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames)

const ages = new Set()
ages.add(20);
ages.add(30).add(25).add(25).add(40)
.delete(30)

console.log(ages, ages.size)
console.log(ages.has(20), ages.has(3))

ages.clear();
console.log(ages)

const names = new Set([
{name: 'samuel', age: 23},
{name: 'Tsap', age: 24},
{name: 'david', age: 21},
{name: 'Tsap', age: 24},
])


names.forEach(naame => {
    console.log(naame.name, naame.age)
})

//symbols
//two symbols can never be the same

const symbolOne = Symbol('a generic name');
const symboleTwo = Symbol('a generic name');

console.log(symbolOne, symboleTwo, typeof symbolOne)

console.log(symbolOne === symboleTwo)

const nin = {}

nin.age = 30;
nin['belt'] = 'red'
nin['belt'] = 'black'

nin[symbolOne] = 'zinny'
nin[symboleTwo] = 'emmanuel'

console.log(nin)


