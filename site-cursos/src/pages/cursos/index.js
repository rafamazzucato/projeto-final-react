import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho'
import Cadastro from './cadastro'
export default class Curso extends Component {

    state = {
        total : 0
    }

    atualizaTotal(total){
        this.setState({total})
    }

    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo={`gerenciamento dos cursos - Total de cursos ${this.state.total}`} />
                <Cadastro atualizaTotal={this.atualizaTotal.bind(this)}/>
            </div>
        )
    }
}