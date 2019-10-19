import React from 'react'

export default class Formulario extends React.Component {

    initialState = {codigo : 0, 
        descricao : '', 
        cargaHoraria: 0, 
        preco: 0.0, 
        categoria: 'REDES'
    }

    constructor(props){
        super(props)
        this.state = this.initialState
    }

    alteraCampos = function(target){
        switch(target.id){
            case 'codigo' :
                this.setState({codigo : target.value})
                break
            case 'descricao' :
                this.setState({descricao : target.value})
                break
            case 'cargaHoraria' :
                    this.setState({cargaHoraria : target.value})
                    break
            case 'preco' :
                    this.setState({preco : target.value})
                    break
            case 'categoria' :
                    this.setState({categoria : target.value})
                    break
            default :
                break
        }
    }

    render() {
        return (
            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-3 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="codigo" value={this.state.codigo} 
                                onChange={(e) => {this.alteraCampos(e.target)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-3 col-form-label">
                            Descrição:
                        </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="descricao" value={this.state.descricao} 
                                onChange={(e) => {this.alteraCampos(e.target)}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-3 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="cargaHoraria" value={this.state.cargaHoraria} 
                                onChange={(e) => {this.alteraCampos(e.target)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-3 col-form-label">
                            Preço:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="preco"  value={this.state.preco}
                                onChange={(e) => {this.alteraCampos(e.target)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-3 col-form-label">Categoria:</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="categoria" value={this.state.categoria}
                                onChange={(e) => {this.alteraCampos(e.target)}}>
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button
                            className="btn btn-primary ml-3 mb-3">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}