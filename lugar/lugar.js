const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);
    
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '177726381cmsh23ab64287bb7ca6p1e4324jsn5746a61e6788'}
      });
    
      const resp = await instance.get();

      if(resp.data.Results.length === 0){
          throw new Error(`No hay resultados para ${dir}`);
      }

      const data = resp.data.Results[0];//Se guarda en data el primer objetos que esta dentro del arreglo Results
      const direccion = data.name;
      const lat = data.lat;
      const lng = data.lon;

              

    return {
        direccion,
        lat,
        lng
    }          

} 

module.exports = {
    getLugarLatLng
}


