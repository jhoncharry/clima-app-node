const axios = require('axios');

const getClima = async (latitude, longitude) => {

    const access_key = "65ad03ae6374cf80cabd365804b0f83c";

    // Make a request for a user with a given ID
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${access_key}&units=metric`);

    return resp.data.main.temp;

}


module.exports = { getClima };