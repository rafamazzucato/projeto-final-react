import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Cursos from '../pages/cursos'
import Contato from '../pages/contato'

export default class Rotas extends Component{
    render(){
        return (
            <Switch>
                <Route path='/cursos' component={Cursos}></Route>
                <Route path='/contato' component={Contato}></Route>
                <Route path='*' component={Cursos}></Route>
            </Switch>
        )
    }
}