import React, { useEffect, useState } from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import SocialLinks from './SocialLinks';

// CSS
import styles from './Nav.module.scss';

const Nav = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        return () => {
            if (toggleMenu) setToggleMenu(false);
        };
    });

    let menuClasses = [styles.menu];

    const toggleMenuHandler = () => {
        setToggleMenu(!toggleMenu);
    }

    if (toggleMenu) {
        menuClasses.push(styles.showMenu);
    } else {
        menuClasses.splice(1, 1);
    }

    return (
        <div className={styles.content}>
            <span
                onClick={toggleMenuHandler}
                className={styles['bar-menu']}>
                <span className={`${styles['bar-menu__line']}`}></span>
                <span className={`${styles['bar-menu__line']} ${styles['bar-menu--line-middle']}`}></span>
                <span className={`${styles['bar-menu__line']}`}></span>
            </span>
            <nav className={menuClasses.join(' ')}>
                <span
                    onClick={toggleMenuHandler}
                    className={styles['menu__close']}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <ul className={styles.menuList}>
                    {props.children}
                </ul>
                <SocialLinks />
            </nav>
        </div>
    );
};

export default Nav;