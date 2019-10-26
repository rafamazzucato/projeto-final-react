import React from 'react';
import Cabecalho from '../../components/cabecalho'
import ContatoForm from './form'
import {connect} from 'react-redux'

class Contato extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo={`envie seu contato - ${this.props.data}`} />
                <ContatoForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data : state.contato.data
}) 

export default connect(mapStateToProps)(Contato)