import React from 'react';
import link from './employees2.jpg';

class Header extends React.Component{


    render(){
        return(
            <>
            <header className='header'>
                    <div className='header__row'>
                        <h1>Employees list</h1>
                        <img className='header__img' src={link} alt="employees"/>
                    </div>
            </header>
            </>
        );
    }
}

export default Header;