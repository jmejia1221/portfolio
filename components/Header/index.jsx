import React from 'react';

// Components
import Logo from './Logo';

// CSS
import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.content}>
            <span>Toggle</span>
            <Logo />
            {props.children}
        </header>
    );
};

export default Header;