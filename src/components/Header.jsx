import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, NavLink} from "react-router-dom";


const Header = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios('https://motion-club.herokuapp.com/category/')
            .then(({data}) => setMenu(data))
    })

    return (
        <div className="container">
           <div className="header">
               <div className="header-items">
                   <h1 className="logo">Afisha</h1>
                   <input className="search-input" placeholder="Поиск событие, концертов" type="text"/>
               </div>
               <div className="nav">
                   <div className="nav-menu">
                       {
                           menu.map(el => (

                                   <NavLink to={`/${el.id}`}>
                                       <p className="nav-menu__item">{el.name}</p>
                                   </NavLink>

                           ))
                       }
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Header;