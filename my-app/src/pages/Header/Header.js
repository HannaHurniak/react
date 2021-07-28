import React from 'react';
import { Link } from 'react-router-dom';
import configTitle from './../../config/config';
import styles from './styles.module.sass'

const Header = () => {
    return (
        <div className={styles.menu}>
            {configTitle.map(({title, path}) => (
                <Link to={path} key={path}>
                    <button>{title}</button>
                </Link>
            ))}
        </div>
    );
};

export default Header;