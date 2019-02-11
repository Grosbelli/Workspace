import React, { Component } from 'react';
import './styles.css';
import Nav from '../Nav';

class Contato extends Component {
    render() {
        return (
            <div>
                <Nav />
                
                <form>
                    <div class="form-group">
                        <label for="nome">Nome:</label> <br />
                        <input type="text" placeholder="Insira seu nome..."></input>
                    </div>
                    <div class="form-group">
                        <label for="sobrenome">Sobrenome:</label> <br />
                        <input type="text" placeholder="Insira seu sobrenome..."></input>
                    </div>
                    <div class="form-group">
                        <label for="telefone">Telefone:</label> <br />
                        <input type="text" placeholder="Insira seu telefone..."></input>
                    </div>
                    <div class="form-group">
                        <label for="textarea">Digite a mensagem.</label> <br />
                        <textarea rows="5" placeholder="Digite uma mensagem e ser enviada por e-mail..."></textarea>
                    </div>
                </form>
            </div>

        );
    }
}


export default Contato;