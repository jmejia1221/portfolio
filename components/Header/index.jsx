import React, { useEffect, useState } from 'react';

// Components
import Logo from './Logo';
import Switch from '../UI/Switch';

// CSS
import styles from './Header.module.scss';


const Header = (props) => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('isDark');
        }
        return null;
    });

    useEffect(() => {
        if (isDark === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark])

    const switchHandler = () => {
        if (isDark === 'dark') {
            localStorage.removeItem('isDark');
            setIsDark(null);
        } else {
            localStorage.setItem("isDark", "dark");
            setIsDark('dark');
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