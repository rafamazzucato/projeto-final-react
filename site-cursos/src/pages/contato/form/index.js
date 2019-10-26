import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    alteraData,
    alteraAssunto,
    alteraNome,
    alteraEmail,
    adicionaContato
} from '../../../actions/contato-actions'

class FormContato extends React.Component {
    
    adicionar = function(e) {
        e.preventDefault();
        this.props.adicionaContato(this.props.data, 
            this.props.nome, 
            this.props.email, 
            this.props.assunto)
        alert('Contato enviado com sucesso')
    }
    
    render() {
        return (<div>
            <h3 className="border-bottom">Formulario</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="data"
                        className="col-sm-3 col-form-label">Data:</label>
                    <div className="col-sm-5 col-6">
                        <input type="date"
                            className="form-control" id="data"
                            value={this.props.data}
                            onChange={this.props.alteraData}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="nome"
                        className="col-sm-3 col-form-label">Nome:</label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="nome"
                            value={this.props.nome}
                            onChange={this.props.alteraNome} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email"
                        className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="email"
                            className="form-control" id="email"
                            value={this.props.email}
                            onChange={this.props.alteraEmail} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="assunto"
                        className="col-sm-3 col-form-label">Assunto:</label>
                    <div className="col-sm-9">
                        <textarea className="form-control"
                            id="assunto" rows="5"
                            value={this.props.assunto}
                            onChange={this.props.alteraAssunto} />
                    </div>
                </div>
                <div className="form-group row">

                    <button 
                        className="btn btn-primary ml-3 mb-3"
                        onClick={this.adicionar.bind(this)}>
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    data : state.contato.data,
    nome : state.contato.nome,
    email : state.contato.email,
    assunto : state.contato.assunto
}) 

const mapDispatchToProps = dispatch => bindActionCreators({
    alteraData,
    alteraAssunto,
    alteraEmail,
    alteraNome,
    adicionaContato
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormContato)