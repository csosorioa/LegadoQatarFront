import { Button } from '@mui/material';
import React from 'react';
import '../assets/css/header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <nav>
            <div className='div-header'>
                <div className='div-title'>
                    <Link to='/' className='logo-a'>
                        <img src={require('../assets/images/logo.png')} alt="logo"/>
                        <h1>Legado<br/>Qatar</h1>
                    </Link>
                </div>
                <div className='div-items'>
                    <Link to="/teams"><Button color="inherit"  variant='text' className='item-button'><h2 className='item-name' size="large">Equipos</h2></Button></Link>
                    <Link to='/articles'><Button color="inherit"  variant='text' className='item-button'><h2 className='item-name' size="large">Artículos</h2></Button></Link>
                    <Button color="inherit"  variant='text' className='item-button'><h2 className='item-name' size="large">Contactos</h2></Button>
                </div>
            </div>
        </nav>
    );
}

export default Header;