const urlApi = 'https://dragonball-api.com/api/characters'

// llamar la informacion
async function getData() {
    let dataPura = await fetch(urlApi)
    let dataJs = await dataPura.json()

    console.log(dataJs);

}

getData()