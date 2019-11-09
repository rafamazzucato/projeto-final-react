import axios from 'axios'
const URL = "http://localhost:3200/api/curso"

export const alteraCodigo = e => {
    return {
        type : 'ATUALIZA_CODIGO',
        value : e.target.value
    }
}

export const alteraDescricao = e => {
    return {
        type : 'ATUALIZA_DESCRICAO',
        value : e.target.value
    }
}

export const alteraCargaHoraria = e => {
    return {
        type : 'ATUALIZA_CARGA',
        value : e.target.value
    }
}

export const alteraPreco = e => {
    return {
        type : 'ATUALIZA_PRECO',
        value : e.target.value
    }
}

export const alteraCategoria = e => {
    return {
        type : 'ATUALIZA_CATEGORIA',
        value : e.target.value
    }
}

export const getList = () => {
    return (dispatch) => {
        return axios.get(URL).then(
            (response) => {
                dispatch({
                    type : 'GET_LISTA',
                    value : response.data
                })
            },
            (err) => {
                console.log(err);
            }
        )
    }
}