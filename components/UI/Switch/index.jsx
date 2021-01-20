import React, { useState } from 'react';

// CSS
import styles from './Switch.module.scss';

const Switch = (props) => {

    return (
        <div className={styles.content}>
            <label className={styles['switch__label']} htmlFor="switch"></label>
            <input className={styles['switch__input']} id="switch" type="checkbox" />
            <span className={styles['switch__ball']} htmlFor="switch"></span>
        </div>
    );
};

export default Switch;