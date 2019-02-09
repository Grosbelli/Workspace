import React, { Component } from 'react'
import './styles.css'
import Logo from './imgs/LogoCompleto.png'
import Back from './imgs/BackgroundBelle2.jpg'
import 'font-awesome/css/font-awesome.min.css'

export default class Header extends Component {
    render() {
        return (
            <header className="main-header" id="header">
                <section className="sec1"><img src={Back} alt="Background" className="d-block" id="back"></img></section>
                <section className="sec2"><img src={Logo} alt="Logo" className="d-block" id="logo"></img></section>
            </header>

        );
    }
}
