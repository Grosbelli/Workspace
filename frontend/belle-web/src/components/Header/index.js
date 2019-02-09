import React from 'react'
import './styles.css'


const Header = () => (
    <header className="main-header" id="header">
    <div id="imagem"><img src="../../.assets/BackgroundBelle2.jpg" alt="" ></img>
    <div id="logo"></div><img src="../../.assets/LogoCompleto.png" alt=""></img>
    </div>
    
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navst">
                <div className="navbar-nav ml-auto collapse navbar-collapse" id="main-nav">
                    <ul className="nav navbar-nav ml-auto" id="list">
                        <a id="color" href="/" className="nav-link"><i className="fa fa-camera-retro fa-sm"></i></a>
                        <a id="color" href="/" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a>
                        <a id="color" href="/" className="nav-link"><i className="fa fa-facebook"></i></a>
                    </ul>
                    <a className="nav-item nav-link active" id="color" href="#page-top">Loja <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" id="color" href="#about-us">Sobre</a>
                    <a className="nav-item nav-link" id="color" href="#contact">Contato</a>
                </div>
    </nav>

    </header>

            );
            
export default Header;