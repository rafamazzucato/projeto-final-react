const INITIAL_STATE = {
    codigo: '123',
    descricao: 'Rafael',
    cargaHoraria: 20.2,
    preco: 150.50,
    categoria : 'INFORMATICA',
    textoBotao: 'Adicionar',
    lista : [{_id: '-1', codigo: 123, descricao : 'curso Teste'}]
}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'LIMPAR_FORM' : return INITIAL_STATE
        default : return state
    }
}