import React from 'react'
import Logo from '../images/Logo.png' 
import { NavLink } from 'react-router-dom'

export  function Barra(){
    return (
        <div className= "Barra">
            <div>
                <img srcr ={Logo} alt = "logo" />
            </div>
            <nav className= "Nav-Info">
                <ul>
                    <button className='pumba'>
                        <NavLink to= './home'>home</NavLink>
                    </button>
                    
                    <button className='pumba'>
                        <NavLink to='./login'>Cerrar sesion</NavLink>
                        </button>
                   
                </ul>
            </nav>
        </div>
    )

};