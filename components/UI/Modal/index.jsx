import React from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// CSS
import styles from './Modal.module.scss';

const Modal = (props) => {
    let modalClasses = null;

    if (props.isShowModal) {
        modalClasses = [styles.content];
        modalClasses.push(styles.show);
    } else {
        modalClasses = [styles.content];
        modalClasses.push(styles.close);
    }

    return (
        <div className={modalClasses.join(' ')}>
            <span
                onClick={props.closeModal}
                className={styles.closeButton}>
                <FontAwesomeIcon icon={faTimes} />
            </span>
            {props.children}
        </div>
    );
};

export default Modal;