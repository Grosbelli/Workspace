import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Contato from './components/Contact'


const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/contato" component={Contato}></Route>
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();
