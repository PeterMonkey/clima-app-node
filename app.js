const axios = require('axios');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const encodedUrl = encodeURI(argv.direccion);
console.log(encodedUrl);


const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {'x-rapidapi-key': '177726381cmsh23ab64287bb7ca6p1e4324jsn5746a61e6788'}
  });

  instance.get()
          .then( resp => {
              console.log(resp.data.Results[0]);
          })
          .catch( err => {
              console.log('ERROR!!!', err);
          })




