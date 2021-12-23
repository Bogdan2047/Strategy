import React from "react";
import { Link } from "react-router-dom";
import './header.css';

export const Header = () =>{
    return(
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <span>ЭКСПЕРТЫ</span>
                <span>ПО СТРАТЕГИИ</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link to='/home' class="nav-link" aria-current="page">Главная</Link>
                </li>
                <li class="nav-item">
                <Link to='/about' class="nav-link">О нас</Link>
                </li>
                <li class="nav-item">
                <Link to='/servise' class="nav-link">Услуги</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}