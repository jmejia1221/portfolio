import React from 'react';

// CSS
import styles from './Backdrop.module.scss';

const Backdrop = (props) => {
    return (
        props.show ? <div onClick={props.closeHandler} className={styles.Backdrop}></div> : null
    );
};

export default Backdrop;