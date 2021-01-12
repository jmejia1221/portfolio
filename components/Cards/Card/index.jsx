import React from 'react';

// CSS
import styles from './Card.module.scss';

const Card = (props) => {

    return (
        <div className={styles.content}>
            <div className={styles.innerContent}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;