import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho'
import Cadastro from './cadastro'
export default class Curso extends Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="gerenciamento dos cursos" />
                <Cadastro/>
            </div>
        )
    }
}