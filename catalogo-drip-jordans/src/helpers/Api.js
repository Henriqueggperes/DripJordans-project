const JordanContext =  {
jordanEndpoint: () => `${Api.baseUrl}/jordans`,
jordanLista: () => `${JordanContext.jordanEndpoint()}/all-boots`,
jordanById: (id) => `${JordanContext.jordanEndpoint()}/find-boot/${id}`,
createJordan: () => `${JordanContext.jordanEndpoint()}/create-boot`,
updateJordanById: (id)=> `${JordanContext.jordanEndpoint()}/update-boot/${id}`,
deleteBootById: (id)=> `${JordanContext.jordanEndpoint()}/delete-boot/${id}`
}

export const Api = {
    baseUrl: "https://drip-jordans-backend-pe1g.onrender.com",
    ...JordanContext,
}

// VINCULANDO ROTAS AO FRONTEND