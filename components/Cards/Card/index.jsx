import React from 'react';

// CSS
import styles from './Card.module.scss';

const Card = (props) => {
    let cardClasses = [styles.innerContent];
    if (props.color) {
        cardClasses.push(styles[props.color]);
    } else {
        cardClasses = [styles.innerContent];
    }

    return (
        <div className={styles.content}>
            <div className={cardClasses.join(' ')}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;