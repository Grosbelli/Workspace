import React, { Component } from 'react'
import './styles.css'
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    componentWillMount() {
        $(window).on('scroll', function () {
            if ($(window).scrollTop()) {
                $('nav').addClass('white');
            } else {
                $('nav').removeClass('white')
            }
        })
    }


    render() {
        return (
            <nav>
                <div className="main-nav" id="main-nav">
                    <ul id="social">
                        <li ><a href="/"><i className="fa fa-camera-retro fa-lg"></i></a></li>
                        <li ><a href="/"><i className="fa fa-twitter fa-lg"></i></a></li>
                        <li ><a href="/"><i className="fa fa-facebook fa-lg"></i></a></li>
                    </ul>
                    <ul id="list">
                        <li className="nav-item" ><Link to="/" id="active">HOME</Link></li>
                        <li className="nav-item" ><a href="/">Loja</a></li>
                        <li className="nav-item" ><a href="/">Sobre</a></li>
                        <li className="nav-item" ><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}