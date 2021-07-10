let request = require('request');

let apiKey = 'd21ea207a63ff8de7674ce7ebb416b4f';
let city = 'memphis';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
