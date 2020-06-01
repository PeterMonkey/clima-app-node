const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
//lugar.getLugarLatLng(argv.direccion)
   //Una funcion async a fuerza regresa una promesa
    //.then(console.log);


    // clima.getClima(9.910000, -68.309998)
    //     .then(console.log)
    //     .catch(console.log);
        
const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng( direccion );
        const temp = await clima.getClima( coords.lat, coords.lng );
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `no se pudo determinar el clima de ${direccion}`;
    }

    
}

getInfo(argv.direccion)
       .then(console.log)
       .catch(console.log);
