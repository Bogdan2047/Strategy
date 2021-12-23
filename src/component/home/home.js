import React from "react";
import './home.css';
import Photo from './photo.jpeg';
import Photo2 from './photo2.jpeg';

export const Home = () =>{
    return(
            <div className='home-page'>
                <div className='block-one'>
                    <div className='slider'>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={Photo} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={Photo2} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='block-one-text'>
                        <div className='block-name'>
                            <span>РЕШЕНИЯ И РЕЗУЛЬТАТЫ</span>
                        </div>
                        <div className='name-text'>
                            <span>Это текст. Нажмите здесь, чтобы добавить свой</span> 
                            <span>текст или отредактировать его. Сделать это</span>
                            <span>просто: Нажмите «Редактировать текст» либо</span> 
                            <span>дважды нажмите на сам текст – и можете</span> 
                            <span>вставлять свое содержимое и задавать шрифт.</span>
                        </div>
                        <div className='block-button'>
                            <button className='btn btn-dark'>УЗНАТЬ ПОДРОБНЕЕ</button>
                        </div>
                    </div>
                </div>
                <div className='block-two'>
                    <div className='block-column'>
                        <div className='about-us'>
                            <div className='about-us-name'>
                                <span>О НАС</span>
                            </div>
                            <div className='about-us-text'>
                                <span>Это текст. Нажмите здесь, чтобы отредактировать</span> 
                                <span>его и добавить свой текст. Сделать это просто:</span> 
                                <span>нажмите «Редактировать текст» либо дважды нажмите</span> 
                                <span>на сам текст – и можете вставлять свое содержимое</span> 
                                <span>и задавать шрифт. Если хотите, его можно перетащить</span> 
                                <span>в любое место на странице. Это место отлично подходит</span> 
                                <span>для размещения дополнительной информации. Расскажите</span> 
                                <span>пользователям о себе.</span>
                            </div>
                        </div>
                        <div className='our-goal'>
                            <div className='our-goal-name'>
                                <span>НАША ЦЕЛЬ</span>
                            </div>
                            <div className='our-goal-text'>
                                <span>Это текст. Нажмите здесь, чтобы отредактировать</span> 
                                <span>его и добавить свой текст. Сделать это просто:</span> 
                                <span>нажмите «Редактировать текст» либо дважды нажмите</span> 
                                <span>на сам текст – и можете вставлять свое содержимое</span> 
                                <span>и задавать шрифт. Если хотите, его можно перетащить</span> 
                                <span>в любое место на странице. Это место отлично подходит</span> 
                                <span>для размещения дополнительной информации. Расскажите</span> 
                                <span>пользователям о себе.</span>
                            </div>
                        </div>
                    </div>
                        <div className='servise'>
                            <div className='servise-name'>
                                <span>УСЛУГИ</span>
                            </div>
                            <div className='servise-text'>
                                <span>Стратегия и организация</span>
                                <span>Развитие компаний</span>
                                <span>Глобализация</span>
                                <span>Управление деятельностью</span>
                                <span>Финансы организаций</span>
                                <span>IT-управление</span>
                                <span>Устойчивое развитие</span>
                                <span>Стратегическое планирование</span>
                                <span>Брендинг</span>
                                <span>Медиаобучение</span>
                                <span>Обучение ведению бизнеса</span>
                            </div>
                        </div>
                    <div>
                    </div>
                </div>
            </div>
    )
}