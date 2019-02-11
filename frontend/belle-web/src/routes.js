import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Contato from './components/Contact'

export default props => (
    <Switch>
        <Route exact path="/contato" component={Contato} />
        <Redirect from='*' to='/' />
    </Switch>
)