const cityForm = document.querySelector('form');

const card = document.querySelector('.card')

const detail = document.querySelector('.details')

const time = document.querySelector('img.time ')

const icon = document.querySelector('.icon img')


const updateUI = (data) => {

//getting the details or data or the weather and the city
//const cityDetail = data.cityDetail;
//const weather = data.weather;

//or

//destruture properties

const { cityDetail, weather} = data;

//update details template

detail.innerHTML = `
<h5 class="my-3">${cityDetail.EnglishName}</h5>
<div class="my-3">${weather.WeatherText}</div>
<div class="display-3 my-4">
<span>${weather.Temperature.Metric.Value}</span>
<span>&deg;C</span>
</div>`

//console.log(weather)

//update the night/day & icon image
 
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc);

//ternary operators

let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'


/*let timeSrc = null;
if(weather.IsDayTime){
    timeSrc = 'img/day.svg'
}else{
    timeSrc = 'img/night.svg'
}*/

time.setAttribute('src', timeSrc);

//remove the d-none class if present
if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
}



}

const updateCity = async (city) => {

const cityDetail = await getCity(city);
const weather = await getWeather(cityDetail.Key);

return { cityDetail, weather } 
}

cityForm.addEventListener('submit', (e) => {
//prevent default action
e.preventDefault();

//get city value
const city = cityForm.city.value.trim();
cityForm.reset();

//update the ui with new city
updateCity(city)
.then( data => updateUI(data))
.catch(err => console.log(err));

//set local storage
localStorage.setItem('city', city);


});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}

//const result = true ? 'value 1' : 'value 2'
//console.log(result)