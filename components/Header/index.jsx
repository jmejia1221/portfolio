import React from 'react';

// Components
import Logo from './Logo';
import Switch from '../UI/Switch';

// CSS
import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.content}>
            <Switch />
            <Logo />
            {props.children}
        </header>
    );
};

export default Header;