const INITIAL_STATE = {
    codigo: '123',
    descricao: 'Rafael',
    cargaHoraria: 20.2,
    preco: 150.50,
    categoria : 'INFORMATICA',
    textoBotao: 'Adicionar',
    lista : []
}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'LIMPAR_FORM' : return INITIAL_STATE
        case 'ATUALIZA_CODIGO' : return { ...state, codigo : action.value}
        case 'ATUALIZA_DESCRICAO' : return { ...state, descricao : action.value}
        case 'ATUALIZA_CARGA' : return { ...state, cargaHoraria : action.value}
        case 'ATUALIZA_PRECO' : return { ...state, preco : action.value}
        case 'ATUALIZA_CATEGORIA' : return { ...state, categoria : action.value}
        case 'GET_LISTA': return { ...state, lista : action.value}
        default : return state
    }
}