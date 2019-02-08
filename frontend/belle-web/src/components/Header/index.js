import React from 'react'
import './styles.css'

const Header = () => (
    <header class="main-header" id="header"> Belle Biscuit Website
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navst">
            <div class="collapse navbar-collapse" id="main-nav">
                <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link active" href="#page-top">Loja <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#about-us">Sobre</a>
                    <a class="nav-item nav-link" href="#contact">Contato</a>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-dark fixed-top navbar-expand-md" id="nav-social">
            <div class="container">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> ☰
        </button>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav ml-auto">
                        <a href="#" class="nav-link"><i class="fa fa-camera-retro fa-sm"></i></a>
                        <a href="#" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a>
                        <a href="#" class="nav-link"><i class="fa fa-facebook"></i></a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

            );
            
export default Header;