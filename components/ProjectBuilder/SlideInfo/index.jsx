import React from 'react';

// CSS
import styles from './SlideInfo.module.scss';

const SlideInfo = (props) => {
    return (
        <div className={styles.content}>
            <header>
                <h2>{props.name}</h2>
            </header>
            <section>
                Content
            </section>
        </div>
    );
};

export default SlideInfo;