//array method

/*const scores = [10, 20, 30, 40, 50, 60, 5, 15];

const filterscores = scores.filter((score) => {
 return score > 20
})

console.log(filterscores)

const users = [
    {name: 'Shaun', premium:true},
    {name: 'Faith', premium:false},
    {name: 'Grace', premium:false},
    {name: 'Miracle', premium:true},
]

const premiumUsers = users.filter((user) => {
    return user.premium;
})

console.log(premiumUsers)

//map method

const salesPrice = scores.map((price) => {
    return price / 2;
})

console.log(salesPrice)

const products = [
    {name: 'Kelvin', prices: 20},
    {name: 'Chris', prices: 40},
    {name: 'David', prices: 30},
    {name: 'Daniel', prices: 10},
    {name: 'Paul', prices: 50},
    {name: 'Blessing', prices: 100}
]

const salesProduct = products.map(prod => {
    if(prod.prices > 30){
        return {name: prod.name, prices: prod.prices / 2}
    } else{
        return prod;
    }
})

console.log(salesProduct)

// reduce Method

const scor = [10, 20 , 60, 40, 50, 90, 100, 70]

const result = scor.reduce((acc, curr) => {
    if(curr > 50){
        acc++;
    } 
    return acc;
}, 0);

console.log(result)


const srcc = [
    {player: 'Mario', goals: 50},
    {player: 'bright', goals: 30},
    {player: 'Sam', goals: 60},
    {player: 'Mario', goals: 90},
    {player: 'Tobi', goals: 100},
    {player: 'Joke', goals: 800}
];

const MarioTotal = srcc.reduce((ac, cur) => {
    if(cur.player === 'Mario'){
        ac += cur.goals;
    }
    return ac;
}, 0)

console.log(MarioTotal);*/

//Find Method

const scores = [10, 5, 0, 40, 60, 80, 10, 10, 20, 70];

const firstHighScore = scores.find((score => {
    return score > 50;
}
));
console.log(firstHighScore)

//sort Method and reverse method


//sorting strings
const names = ['Mario', 'Bayo', 'Grace', 'Samson', 'Tolu', 'Paracot']
//names.sort();
names.reverse();

console.log(names)

//sorting numbers
const digit = [10, 20, 60, 30, 80, 5, 90, 80];
digit.sort((a, b) => a - b);
//digit.reverse();
console.log(digit)



//sorting objects
const players = [
    {player: 'Mario', goals: 50},
    {player: 'bright', goals: 30},
    {player: 'Sam', goals: 60},
    {player: 'ario', goals: 90},
    {player: 'Tobi', goals: 100},
    {player: 'Joke', goals: 800} 
];

/*players.sort((a,b) => {
    if(a.goals > b.goals){
        return -1;
    } else if( b.goals > a.goals){
        return 1;
    } else{
        return 0;
    }
})*/

// shorter method
players.sort((a,b) => b.goals - a.goals );

console.log(players);

//chaining array method

const prodd = [
    {names: 'gold star', price:30},
    {names: 'green shell', price:10},
    {names: 'red shell', price:40},
    {names: 'banana skin', price:5},
    {names: 'mushroom', price:50}
];

const filtered = prodd.filter( product => product.price > 20);

const promos = filtered.map( product => {
    return `the ${product.names} is ${product.price /2} pounds`
})

promos = prodd.filter(product => product.price > 20)
.map(product => `the ${product.names} is ${product.price / 2} pounds`)

console.log(promos)










