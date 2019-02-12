import React, { Component } from 'react';
import './styles.css';
import Nav from '../Nav';

class Contato extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container" id="form">
                    <form>
                        <div class="row">
                            <div className="col-lg-12">
                                <label for="nome">Nome:</label>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <input className="name" type="text" placeholder="Insira seu nome..."></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <label for="sobrenome">Sobrenome:</label>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <input className="name" type="text" placeholder="Insira seu sobrenome..."></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <label for="telefone">Telefone:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="tel" type="text" placeholder="Insira seu telefone..."></input>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <label for="textarea">Digite a mensagem.</label>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <textarea rows="5" placeholder="Digite uma mensagem e ser enviada por e-mail..."></textarea>
                            </div>
                        </div>
                    </form>
                </div >
            </div >

        );
    }
}


export default Contato;