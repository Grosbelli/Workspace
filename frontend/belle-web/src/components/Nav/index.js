import React, { Component } from 'react'
import './styles.css'
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery'

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
                <div id="main-nav">
                    <ul id="social">
                        <li ><a href="/"><i className="fa fa-camera-retro fa-lg"></i></a></li>
                        <li ><a href="/"><i className="fa fa-twitter fa-lg"></i></a></li>
                        <li ><a href="/"><i className="fa fa-facebook fa-lg"></i></a></li>
                    </ul>
                    <ul id="list">
                        <li className="nav-item" ><a href="#page" id="active">HOME</a></li>
                        <li className="nav-item" ><a href="/">Loja</a></li>
                        <li className="nav-item" ><a href="/">Sobre</a></li>
                        <li className="nav-item" ><a href="/">Contato</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}