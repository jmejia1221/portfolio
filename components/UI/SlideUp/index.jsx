import React, { useEffect } from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import Backdrop from '../Backdrop';

// CSS
import styles from './SlideUp.module.scss';

const SlideUp = (props) => {
    let modalClasses = null;

    useEffect(() => {
        if (modalClasses.includes(styles.show)) document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    if (props.isShowSlide) {
        modalClasses = [styles.content];
        modalClasses.push(styles.show);
    } else {
        modalClasses = [styles.content];
    }

    return (
        <>
            <Backdrop show={props.isShowSlide} closeHandler={props.closeSlide} />
            { props.isShowSlide && (<span
                onClick={props.closeSlide}
                className={styles.closeButton}>
                <FontAwesomeIcon icon={faTimes} />
            </span>) }
            <div className={modalClasses.join(' ')}>
                {props.children}
            </div>
        </>
    );
};

export default SlideUp;