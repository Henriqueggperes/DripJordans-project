import {Api} from  '../helpers/Api'
const parseResponse = (response) => response.json();

const transformJordan = (jordan) =>{

    return {
        ...jordan,
        id: jordan._id,
        titulo: jordan.nome,

    }
}

const parseTransformLista = (response) =>
  parseResponse(response).then((jordans) => jordans.map(transformJordan));

export const JordanService = {
    getLista : () =>
    fetch(Api.jordanLista(),{method: "GET"}).then(parseTransformLista),
    
    getById: (id) => 
    fetch(Api.jordanById(id),{method: "GET"}).then(parseTransformLista),
    
    updateById: (id) => 
    fetch(Api.updateJordanById(id),{method: "PUT"}).then(parseTransformLista),
    
    deleteById: (id) => 
    fetch(Api.deleteBootById(id),{method: "DELETE"}).then(parseTransformLista),
    
    createJordan: () => 
    fetch(Api.createJordan(),{method: "POST"}).then(parseTransformLista),

}