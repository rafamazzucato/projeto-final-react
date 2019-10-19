import React from 'react'

export default class Cabecalho extends React.Component{
    render(){
        const props = this.props
        return (
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2><strong>{props.titulo}</strong> -
                <small>&nbsp;{props.subtitulo}</small></h2>
            </header>
        )
    }
}