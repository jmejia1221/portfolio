import React from 'react';

// CSS
import styles from './Button.module.scss';

const Button = (props) => {

    return (
        <button
            className={styles.Button}
            onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default Button;