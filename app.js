const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
lugar.getLugarLatLng(argv.direccion)
   //Una funcion async a fuerza regresa una promesa
     .then(console.log);



