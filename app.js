const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("./config/yargs").argv;







/* lugar.getLugarLatLong(argv.direccion)
    .then(resp => console.log(resp))
    .catch(error => console.log(error)); */

/* clima.getClima(40.75, -74.00)
    .then(resp => console.log(resp))
    .catch(error => console.log(error)); */




const getInformation = async (direccion) => {


    try {

        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.latitude, coordenadas.longitude);

        return `El clima de ${coordenadas.direction} es de ${temperatura}°`;

    } catch (error) {

        return `No se pudo determinar el clima de ${direccion}`;

    }


}


getInformation(argv.direccion)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));