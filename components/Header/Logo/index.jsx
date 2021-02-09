import React from 'react';
import Image from 'next/image';

// CSS
import styles from './Logo.module.scss';

const Logo = (props) => {
    let isDark = null;
    if (props.isDark) {
        isDark = true;
    } else {
        isDark = null;
    }
    return (
        <span className={styles.content}>
            {isDark ? (
                <Image
                    width="40"
                    height="40"
                    src="/logo_white.svg"
                    className={styles.icon}
                    alt="John Mejia" />
            ) : (
                <Image
                    width="40"
                    height="40"
                    src="/logo_black.svg"
                    className={styles.icon}
                    alt="John Mejia" />
            )}
        </span>
    );
};

export default Logo;