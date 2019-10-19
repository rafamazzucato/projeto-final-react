import React, { Component } from 'react';
import Cabecalho from '../../components/cabecalho'
export default class Contato extends Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="envie seu contato" />
            </div>
        )
    }
}