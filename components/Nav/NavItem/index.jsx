import React from 'react';
import Link from 'next/link';

// CSS
import styles from './NavItem.module.scss';

const NavItem = (props) => {
    let path = props.href || '/';
    return (
        <li className={styles.item}>
            <Link href={path}>
                <a>{props.children}</a>
            </Link>
        </li>
    );
};

export default NavItem;