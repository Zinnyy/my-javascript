//dates & times in Javascript

/*const now = new Date();

console.log(now)
console.log(typeof now)

//year, months, day, times

console.log('getFullYeear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDay:', now.getDay());
console.log('getDate:', now.getDate());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());


//timestamps
console.log('timestamp:', now.getTime());

//date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//timestamps and comparison
// timestamp is the number of milliseconds since 12 a.m on the 1st of Jan 1970

const before = new Date('January 26 2023 8:19:10');


//console.log(after.getTime(),  before.getTime())

const diff = now.getTime() - before.getTime()
console.log(diff)

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24)

console.log(mins, hours, days)

console.log(`the blog was written ${days} day ago` )

//converting timestammps into date objects

const timestamp = 1674761823322;
console.log(new Date(timestamp))


//digital clock
const clock = document.querySelector('.clock')

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h} :</span>
    <span> ${m} :</span>
    <span> ${s}</span>

    `
clock.innerHTML = html

};

setInterval(tick, 1000)

const now = new Date();

//console.log(dateFns.isToday(now));

console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'Wo'))
console.log(dateFns.format(now, 'dddd'))
console.log(dateFns.format(now, 'do'))
console.log(dateFns.format(now, 'MMMM'))
console.log(dateFns.format(now, 'dddd YYYY MMMM do'))


//comparing dates

const before = new Date('January 27 2023 22:00:00')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))*/

//ASynchronous Javascript


/*console.log(2)
console.log(3)
console.log(4)

setTimeout(() => {
 console.log('callback function fired')
}, 2000)

console.log(5)
console.log(6)

//HTTP request
// its use to get data from another server
//we make these request to API endpoint


//callback function
const getTodo = (resource, callback) => {
    const request = new XMLHttpRequest();

    //readystatechange
    
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState)
        
        
        if(request.readyState === 4 && request.status === 200){
        //console.log(request.responseText, request)
        const data = JSON.parse(request.responseText);    
        
        callback(undefined, data /*request.responseText*/ //)
    /*} else if(request.readyState === 4) {
        //console.log('could not fetch the data')
        callback('could not fetch data', undefined)
    }
    
    })
    
    request.open('GET', resource/*'startup5.json')*/
    //request.send();
    
    //404 - cannot find the request because it doesnt exist
    //200 - means its okay

//}
/*
getTodo((err, data) => {
    console.log('callback fired')
    if(err){
        console.log(err)
}else{ console.log(data)}
});

getTodo('todo/jean.json',(err, data) => {
    console.log(data)
    getTodo('todo/mario.json',(err, data) => {
        console.log(data)
    })
    getTodo('todo/startup5.json',(err, data) => {
        console.log(data)
    })
        
})


// parameter function => () {}

//promise example

const getSomething = () => {

    return new Promise((resolve, reject) => {
        //fetch something
        //resolve('some data');
        reject('some error')
    })

}

/*getSomething().then(data => {
    console.log(data);
}, (err => {
    console.log(err)
})
)

//or

getSomething().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})




getTodo = (resource) => {


    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve( data);
            }else if (request.readyState === 4){
                reject('could not fetch data');
            };
        })

        request.open('GET', resource)
        request.send();
    })

}

getTodo('todo/jean.json').then (data => {
    console.log('promise 1 resolved:',data)
   return getTodo('todo/mario.json')
}).then(data => {
        console.log('promise 2 resolved:', data);
        return getTodo('todo/startup5.json')
    }) .then(data => {
            console.log('promise 3 resolved:', data)   
}).catch ((err) => {
    console.log('promise rejected', err)
})




//fetch api


fetch('todo/jean.json').then((response) => {
    console.log('resolved', response)

    return response.json()
    .then((data) => {
        console.log(data)
    })
}).catch((err) => {
    console.log('rejected', err)
})*/


//async and wait

const testi = async () => {

const response = await fetch('todo/jeans.json');
 
if(response.status !== 200){
    throw new Error('not correct')
 }

const data = await response.json();

return data;
};


testi().then (data =>  console.log('resolved:', data))
.catch(err => console.log('rejected:', err.message))


const now = new Date()

//console.log(dateFns.format(now, 'Dd'))