import React from "react";
import Dataservise from "./dataservise";
import './servise.css';
import { Servisedata } from "./servisedata";

export const Servise = () =>{
    return(
        <div className='servise-page'>
            <div className='servise-block-one'>
                <div className='servise-block-one-name'>
                    <span>УСЛУГИ</span>
                </div>
                <div className='servise-block-one-text'>
                    <span>Это текст.Нажмите здесь, чтобы отредактировать его и добавить свой текст.</span> 
                    <span>Сделать это просто нажмите «Редактировать текст» либо дважды нажмите на сам</span> 
                    <span>текст – и можете вставлять свое содержимое и задавать шрифт. Если хотите, его</span> 
                    <span>можно перетащить в любое место на странице.</span>
                </div>
            </div>
            <div className='servise-block-two'>
                {Dataservise.map(i =>{
                    return(
                        <Servisedata name={i.name} article={i.article}/>
                    )
                })}
            </div>
        </div>
    )
}