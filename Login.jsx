import './Login.css'
import React from 'react'
import ceu from './Img/Image.png'
import not from './Img/Not.png'
import tropa from './Img/Tropa.png'

export default param =>

        <><div className="Tela">
            <img src={ceu} className="ceu"/>
            <img src={not} className="not" />
            <img src={tropa} className="tropa" />
            <div className="Text-Painel">
                Bem Vindo ao <a>painel</a>
                <input className="input-email" type="email" placeholder="Digite seu e-mail" />
                <input className="input-senha" type="password" placeholder="Digite sua senha" />
                <button class="buttonNext">Acessar</button>
            </div>
            <div className='Imagens'>
                <div className="image" />
                <div className="image2" />
            </div>
        </div></>