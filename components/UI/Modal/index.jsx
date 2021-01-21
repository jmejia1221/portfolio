import React from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// CSS
import styles from './Modal.module.scss';

const Modal = (props) => {
    let modalClasses = null;

    if (props.isShowModal) {
        modalClasses = [styles.container];
        modalClasses.push(styles.show);
    } else {
        modalClasses = [styles.container];
    }

    return (
        <div className={modalClasses.join(' ')}>
            <div className={styles.content}>
                <span
                    onClick={props.closeModal}
                    className={styles.closeButton}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;