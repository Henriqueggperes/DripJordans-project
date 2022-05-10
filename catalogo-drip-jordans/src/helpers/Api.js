const JordanContext =  {
jordanEndpoint: () => `${Api.baseUrl}/jordans/all-boots`,
jordanLista: () => `${JordanContext.jordanEndpoint()}/all-boots`,
jordanById: (id) => `${JordanContext.jordanEndpoint()}/find-boot/${id}`,
createJordan: () => `${JordanContext.jordanEndpoint()}/create-boot`,
updateJordanById: (id)=> `${JordanContext.jordanEndpoint()}/update-boot/${id}`,
deleteBootById: (id)=> `${JordanContext.jordanEndpoint()}/delete-boot/${id}`
}

export const Api = {
    baseUrl: process.env.REACT_APP_API_URL,
    ...JordanContext,
}

// VINCULANDO ROTAS AO FRONTEND