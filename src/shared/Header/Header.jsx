import React from 'react';
import classes from './Header.module.css';

const Header = ({children}) => {
    return (
        <h1 className={classes.header}>{children}</h1>
    )
}

export default Header
