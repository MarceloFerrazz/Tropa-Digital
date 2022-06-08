import './Home.css'
import React from 'react'
import paisagem from './Img/paisagem.png'
import tropa from './Img/Tropa.png'

export default param =>
    <>
        <h1>Olá <a>Usuário</a><hr/></h1>
        <div className='container'>
            <div className='Cardd'>
        <img src={paisagem} className="paisagem"/>
        <h4><strong>Lorem Ipsum is simply dummy text of the printing and typesettin...</strong></h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p></div>
        
        <div className='Cardd'>
        <img src={paisagem} className="paisagem"/>
        <h4><strong>Lorem Ipsum is simply dummy text of the printing and typesettin...</strong></h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p></div>
        
        <div className='Cardd'>
        <img src={paisagem} className="paisagem"/>
        <h4><strong>Lorem Ipsum is simply dummy text of the printing and typesettin...</strong></h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p></div>
        



        <div className='Cardd'>
        <img src={paisagem} className="paisagem"/>
        <h4><strong>Lorem Ipsum is simply dummy text of the printing and typesettin...</strong></h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p></div>
        
        <div className='Cardd'>
        <img src={paisagem} className="paisagem"/>
        <h4><strong>Lorem Ipsum is simply dummy text of the printing and typesettin...</strong></h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p></div>
        
        <div className='Cardd'>
        <img src={paisagem} className="paisagem"/>
        <h4><strong>Lorem Ipsum is simply dummy text of the printing and typesettin...</strong></h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p></div>
        
        </div>

        <div className='Card'>
        <img src={tropa} className="tropaa" />
            <button class="button">Inicio</button>
            <button class="button">Contatos</button>
            <button class="button">Relatórios</button>
            <button class="button">Contatos1</button>
            <button class="button">Contatos2</button>
            <button class="button">Contatos3</button>
        </div></>