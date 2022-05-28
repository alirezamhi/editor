import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.container}>
            <h1>Image Editor</h1>
            <span>by Alireza Mohammadkhani</span>
        </div>
    );
};

export default Header;