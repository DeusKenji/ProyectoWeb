import React from 'react';
import '../css/Home.css';
import sm1 from '../img/sm1.jpg';
import sm2 from '../img/sm2.jpg';
import sm3 from '../img/sm3.jpg';


export default function Home(props){
    return(
        <div className={props.modoDia ? 'homebgd':'homebgn'}>
            <div className='col-12 text-center'>
                <br/>
                <h3 className={props.modoDia ? 'hometxtd':'hometxtn'}>Bienvenido a DK.STORE</h3>
                <br/>
            </div>
            <div className='col-12 form-inline'>
                <div id="demo" className="carousel slide col-12 col-lg-7" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className='imgCa' src={sm1} alt="Los Angeles"/>
                        </div>
                        <div className="carousel-item">
                            <img className='imgCa' src={sm2} alt="Chicago"/>
                        </div>
                        <div className="carousel-item">
                            <img className='imgCa' src={sm3} alt="New York"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className='col-12 col-lg-4'>
                    <article>
                        <p className={props.modoDia ? 'hometxtd':'hometxtn'}>
                            En <b>DK.STORE siempre</b> podras encontrar <b>los mejores productos al mejor precio</b>.
                        </p>
                        <br/>
                        <p className={props.modoDia ? 'hometxtd':'hometxtn'}>
                            Lo invitamos a ver nuestro productos en la sesion de productos. <br/>
                            Puede brindarnos sus sugerencias, inquietudes, quejas, reclamos o consultas en la sesion de sugerencias.<br/>
                            <b>Siempre estaremos encantados de atenderlos</b>
                            <br/>
                            <br/>
                            Ubicacion fisica no disponible
                        </p>
                    </article>
                </div>
                <div className='col-12'>
                    <br/>
                    <p className={props.modoDia ? 'hometxtd':'hometxtn'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br/>
                    <p className={props.modoDia ? 'hometxtd':'hometxtn'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br/>
                    <p className={props.modoDia ? 'hometxtd':'hometxtn'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br/>
                    <p className={props.modoDia ? 'hometxtd':'hometxtn'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}