import React, { useEffect, useState } from 'react';

// Components
import Logo from './Logo';
import Switch from '../UI/Switch';

// CSS
import styles from './Header.module.scss';


const Header = (props) => {
    const [isDark, setIsDark] = useState('isDark');

    useEffect(() => {
        const isDark = localStorage.getItem('isDark');
        setIsDark(isDark);
        if (isDark === 'dark') {
            document.body.classList.add('dark');
            localStorage.setItem("isDark", "dark");
        }
    }, [])

    const switchHandler = () => {
        setIsDark(localStorage.getItem('isDark'));
        if (isDark === 'dark') {
            document.body.classList.remove('dark');
            localStorage.removeItem('isDark');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem("isDark", "dark");
        }
    }

    return (
        <header className={styles.content}>
            <Switch isDark={isDark} clicked={switchHandler} />
            <Logo isDark={isDark} />
            {props.children}
        </header>
    );
};

export default Header;