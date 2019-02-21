import React, { Component } from 'react';
import './styles.css';
import Nav from '../Nav';

const initialState = { 
    email: {
        recipient: 'contatobellebiscuit@gmail.com',
        sender: 'contatobellebiscuit@gmail.com',
        subject: 'Contato Belle Biscuit WEB',
        msg: '',
        nome: '',
        sobrenome: '',
        telefone: '',
        text: ''
    }
}


class Contato extends Component {
    constructor(props) {
        super(props)

        this.onChangeMsg = this.onChangeMsg.bind(this)
        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeSobrenome = this.onChangeSobrenome.bind(this)
        this.onChangeTelefone = this.onChangeTelefone.bind(this)

        this.state = {...initialState}

    }

    
    onChangeNome(e) {
        const {email} = this.state
        this.setState( {email: {...email, nome: e.target.value}})
    }
    
    onChangeSobrenome(e) {
        const {email} = this.state
        this.setState({email: {...email, sobrenome: e.target.value }})
    }
    
    onChangeTelefone(e) {
        const {email} = this.state
        this.setState ({email: {...email, telefone: e.target.value }})
    }
    
    onChangeMsg(e) {
        const {email} = this.state
        this.setState({email: {...email, msg: e.target.value, text: `Contato: ${email.nome} ${email.sobrenome} ******* Telefone: ${email.telefone} *****************  ${email.msg}` }})
    }
    
    sendEmail = _ => {
        const {email} = this.state;
             
        fetch(`http://localhost:8181/contato?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`)
            .catch(err => console.log(err))
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
                                <label htmlFor="nome">Nome:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="name" type="text" placeholder="Insira seu nome..."
                                value={email.nome}
                                onChange={this.onChangeNome}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="sobrenome">Sobrenome:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="name" type="text" placeholder="Insira seu sobrenome..."
                                value={email.sobrenome}
                                onChange={this.onChangeSobrenome}
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