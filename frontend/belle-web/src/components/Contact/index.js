import React, { Component } from 'react';
import './styles.css';
import Nav from '../Nav';
import { isValidEmail } from '../../utils/utils'


const initialState = { 
    email: {
        recipient: 'contatobellebiscuit@gmail.com',
        sender: 'contatobellebiscuit@gmail.com',
        subject: 'Contato Belle Biscuit WEB',
        msg: '',
        nome: '',
        email: '',
        telefone: '',
        text: ''
    }
}


class Contato extends Component {
    constructor(props) {
        super(props)

        this.onChangeMsg = this.onChangeMsg.bind(this)
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeTelefone = this.onChangeTelefone.bind(this)

        this.state = {...initialState}

    }

    
    onChangeNome(e) {
        const {email} = this.state
        this.setState( {email: {...email, nome: e.target.value}})
    }
    
    onChangeEmail(e) {
        const {email} = this.state
        this.setState({email: {...email, email: e.target.value }})
    }
    
    onChangeTelefone(e) {
        const {email} = this.state
        this.setState ({email: {...email, telefone: e.target.value }})
    }
    
    onChangeMsg(e) {
        const {email} = this.state
        this.setState({email: {...email, msg: e.target.value, text: `Contato: ${email.nome} ************** <br> ${email.email} *************** Telefone: ${email.telefone} *****************  ${email.msg}` }})
    }
    
    sendEmail = _ => {
        const {email} = this.state;
             
        fetch(`http://localhost:8181/contato?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`)
            .catch(err => console.log(err))
    }

    validarEmail = () => {
        const email = this.state.email.email;
        if(!!email && !isValidEmail(email)) {
                
        }
    }



    render() {

            const {email} = this.state
        return (
            <div>
                <Nav />
                <div className="container" id="form">
                    <form>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="nome">Nome Completo:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="name" type="text" placeholder="Insira seu nome completo..."
                                value={email.nome}
                                onChange={this.onChangeNome}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="email">E-mail:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="name" type="text" placeholder="Insira seu email..."
                                value={email.email}
                                onChange={this.onChangeEmail}
                                onBlur={this.validarEmail}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="telefone">Telefone:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="tel" type="text" placeholder="DDD + Número"
                                value={email.telefone}
                                onChange={this.onChangeTelefone}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="textarea">Digite uma mensagem.</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <textarea rows="5" placeholder="Digite uma mensagem a ser enviada por e-mail..."
                                    value={email.msg}
                                    onChange={this.onChangeMsg}  //e => this.setState({ email: { ...email, text: e.target.value}})
                                ></textarea>
                            </div>
                        </div>
                        <div className="row">
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