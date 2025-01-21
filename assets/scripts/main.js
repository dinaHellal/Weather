let apiKey = '2b4828e9bd40b0b1760b17dd5a55a020';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-Icon');

async function checkWeather(city){
    try {
        let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if(response.status == 404){
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';

        }else{

        }
        
        var data = await response.json();


        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/H';


        weatherIcon.src = 'assets/images/clouds.png' + '?v=' + new Date().getTime();

        const weatherCondition = data.weather[0].main.toLowerCase();
        if(weatherCondition === 'Clouds'){
            weatherIcon.src = 'assets/images/clouds.png';
        }
        else if(weatherCondition === 'Clear'){
            weatherIcon.src = 'assets/images/clear.png';
        }
        else if(weatherCondition === 'Mist'){
            weatherIcon.src = 'assets/images/mist.png';
        }
        else if(weatherCondition === 'Rain'){
            weatherIcon.src = 'assets/images/rain.png';
        }
        else if(weatherCondition === 'Drizzle'){
            weatherIcon.src = 'assets/images/drizzle.png';
        }
        else if(weatherCondition === 'Snow'){
            weatherIcon.src = 'assets/images/snow.png';

        }

        console.log(weatherIcon.src);



    } catch (error) {}
    document.querySelector('.weather').style.display = 'block';
        
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
