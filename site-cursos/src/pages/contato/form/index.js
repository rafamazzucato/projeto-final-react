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

        const {adicionaContato, data, nome, email, assunto} = this.props

        adicionaContato(data, 
            nome, 
            email, 
            assunto)
        alert('Contato enviado com sucesso')
    }
    
    render() {

        const {data, assunto, email, nome, alteraAssunto, alteraData, alteraEmail, alteraNome} = this.props

        return (<div>
            <h3 className="border-bottom">Formulario</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="data"
                        className="col-sm-3 col-form-label">Data:</label>
                    <div className="col-sm-5 col-6">
                        <input type="date"
                            className="form-control" id="data"
                            value={data}
                            onChange={alteraData}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="nome"
                        className="col-sm-3 col-form-label">Nome:</label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="nome"
                            value={nome}
                            onChange={alteraNome} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email"
                        className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="email"
                            className="form-control" id="email"
                            value={email}
                            onChange={alteraEmail} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="assunto"
                        className="col-sm-3 col-form-label">Assunto:</label>
                    <div className="col-sm-9">
                        <textarea className="form-control"
                            id="assunto" rows="5"
                            value={assunto}
                            onChange={alteraAssunto} />
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