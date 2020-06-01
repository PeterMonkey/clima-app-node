const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b2a0b4ee2a2e08834c2e4f041e6d3723&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}