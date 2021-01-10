import React from 'react';
import Image from 'next/image';

// CSS
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <span className={styles.content}>
            {/* <Image
                width="40"
                height="40"
                src="/logo_white.svg"
                className={styles['logo__icon']}
                alt="Logo John Mejia White" /> */}
            <Image
                width="40"
                height="40"
                src="/logo_black.svg"
                className={styles.icon}
                alt="Logo John Mejia Black" />
        </span>
    );
};

export default Logo;