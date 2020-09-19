const axios = require('axios');

const getLugarLatLong = async (direccion) => {

    const encodeUrl = encodeURI(direccion);
    const access_key = "5a50f9dd262ca114511e0863150dd453";


    // Make a request for a user with a given ID
    const resp = await axios.get(`http://api.positionstack.com/v1/forward?access_key=${access_key}&query=${encodeUrl}`);



    if (resp.data.data.length === 0) {

        throw (`No hay resultado para ${direccion}`);

    }




    const data = resp.data.data[0];
    const direction = data.label;
    const latitude = data.latitude;
    const longitude = data.longitude;



    return {

        direction,
        latitude,
        longitude
    }

}


module.exports = { getLugarLatLong };


