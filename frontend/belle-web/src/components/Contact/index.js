import React, { Component } from 'react';
import './styles.css';
import Nav from '../Nav';


class Contato extends Component {
    
    state = {
        email: {
            recipient: 'bellebiscuit@hotmail.com',
            sender: 'andy.a7x1@gmail.com',
            subject: '',
            text: '',
    
        }
    }
    
    sendEmail = _ => {
        const { email } = this.state;
        fetch(`http://localhost:3000/contato?recipient=${email.recipient}&sender==${email.sender}&topic=${email.subject}&text=${email.text}`)
            .catch(err => console.log(err))
    }



    render() {
        const { email } = this.state;
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
                                <textarea rows="5" placeholder="Digite uma mensagem e ser enviada por e-mail..."
                                    value={email.text}
                                    onChance={e => this.setState({ email: { ...email, text: e.target.value } })}></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-12">
                                <button onClick={this.sendEmail}> Enviar</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >

        );
    }
}


export default Contato;