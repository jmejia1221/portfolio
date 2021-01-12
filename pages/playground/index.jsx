import React from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

// Components
import Cards from '../../components/Cards';
import Card from '../../components/Cards/Card';

// CSS
import styles from './Playground.module.scss';

const Playground = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Playground</h1>
            <section className={styles.work}>
                <Cards>
                    <Card>
                        <div className={styles['work-content']}>
                            <h1 className={styles['work__title']}>
                                Task Manager App
                            </h1>
                            <span className={styles['work__view']}>
                                View
                                <FontAwesomeIcon
                                    className={styles['work__icon']}
                                    icon={faLongArrowAltRight} />
                            </span>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles['work-content']}>
                            <h1 className={styles['work__title']}>
                                Task Manager App
                            </h1>
                            <span className={styles['work__view']}>
                                View
                                <FontAwesomeIcon
                                    className={styles['work__icon']}
                                    icon={faLongArrowAltRight} />
                            </span>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles['work-content']}>
                            <h1 className={styles['work__title']}>
                                Task Manager App
                            </h1>
                            <span className={styles['work__view']}>
                                View
                                <FontAwesomeIcon
                                    className={styles['work__icon']}
                                    icon={faLongArrowAltRight} />
                            </span>
                        </div>
                    </Card>
                </Cards>
            </section>
        </div>
    );
};

export default Playground;