import React from 'react';

// CSS
import styles from './Cards.module.scss';

const Cards = (props) => {

    return (
        <div className={styles.content}>
            {props.children}
        </div>
    );
};

export default Cards;