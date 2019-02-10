import React from 'react'
import './styles.css'
import img1 from './imgs/img2.jpg'
import img2 from './imgs/img3.jpg'
import img3 from './imgs/img4.jpg'

export default props => 
    <content className="content"> 
        <section className="content">
            <h1>Belle Biscuit na festa!!!</h1>        
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                 e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma 
                 bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum 
                 sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, 
                 permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset 
                 lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser
                 integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
        </section>
        <section className="image">
            <img src={img1} className="imgContent" alt="biscuit1"></img>
            <img src={img2} className="imgContent" alt="biscuit2"></img>
            <img src={img3} className="imgContent" alt="biscuit3"></img>
        </section>
    </content>