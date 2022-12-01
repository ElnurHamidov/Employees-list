import React from 'react';

class Header extends React.Component{


    render(){
        return(
            <>
            <header className='header'>
                    <div className='header__row'>
                        <h1>Employees list</h1>
                    </div>
            </header>
            </>
        );
    }
}

export default Header;