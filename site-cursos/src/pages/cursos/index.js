import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho'
import Cadastro from './cadastro'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    lista : state.curso.lista
})

class Curso extends Component {

    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo={`gerenciamento dos cursos - Total de cursos ${this.props.lista.length}`} />
                <Cadastro />
            </div>
        )
    }
}

export default connect(mapStateToProps, null) (Curso)