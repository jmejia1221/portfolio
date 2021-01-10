import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// CSS
import styles from './NavItem.module.scss';

const NavItem = (props) => {
    const router = useRouter();
    let path = props.href || '/';
    let linkClasses = [styles.item];

    if (router.pathname === path) {
        linkClasses.push(styles.active);
    } else {
        linkClasses.splice(1, 1);
    }

    return (
        <li className={linkClasses.join(' ')}>
            <Link href={path}>
                <a>{props.children}</a>
            </Link>
        </li>
    );
};

export default NavItem;