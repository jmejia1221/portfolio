import React, { useState } from 'react';

// Libs
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Button from '@/components/UI/Button';
import Modal from '@/components/UI/Modal';
import Tags from '@/components/UI/Tags';

// Utility
import {
    LANGUAGES,
    MARKUP_CASCADE,
    FRAMEWORKS,
    DESIGN_TOOLS,
    OTHER
} from '../../utility/consts';

// CSS
import styles from './About.module.scss';

const About = () => {
    const [showModal, setShowModal] = useState(false);

    const modalHandler = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>About Me</h1>
                    <article className={styles.article}>
                        <p className={`${styles.text} ${styles.greets}`}><strong>- Hello</strong></p>
                        <p className={styles.text}>I'm professionally connected with the web development industry and information
                        technology for over 8 years. I've been working at Anomali inc.
                        <a className={styles.link} target="_blank" href="https://www.anomali.com/">anomali.com</a> for last 5 years.</p>
                        <p className={styles.text}>Well-organised person, problem solver with high attention to detail.
                        Seeking challenges to create easy-to-navigate websites, create them from scratch or
                        redesign and build them in web development technologies.</p>
                        <p className={`${styles.text} ${styles.legend}`}>
                            <strong>I'm always up for new challenges, where I can collaborate with people and companies to
                        get their product ideas rolling.</strong>
                        </p>
                        <p className={`${styles.text} ${styles.legend}`}>
                            Feel free to check <a className={styles.link} target="_blank" href="">my resume</a>.
                        </p>
                    </article>
                    <div className={styles.skillsAction}>
                        <Button clicked={modalHandler}>
                            Skills & Expertise
                            <FontAwesomeIcon className={styles.arrowIcon} icon={faChevronRight} />
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                closeModal={modalHandler}
                isShowModal={showModal}>
                <div className={styles.skills}>
                    <h3 className={styles['skills__title']}>Skills & Expertise</h3>
                    <section className={styles.section}>
                        <article className={styles.article}>
                            <p className={styles['article__info']}>
                                The main area of my expertise is front end development (client side of the web).
                            </p>
                            <h4 className={styles['article__subtitle']}>
                                - Programming Languages
                            </h4>
                            <Tags tags={LANGUAGES} />
                            <h4 className={styles['article__subtitle']}>
                                - Markup & Cascade languages
                            </h4>
                            <Tags tags={MARKUP_CASCADE} />
                            <h4 className={styles['article__subtitle']}>
                                - Frameworks & Libraries
                            </h4>
                            <Tags tags={FRAMEWORKS} />
                            <h4 className={styles['article__subtitle']}>
                                - Design Tools
                            </h4>
                            <Tags tags={DESIGN_TOOLS} />
                            <h4 className={styles['article__subtitle']}>
                                - Others
                            </h4>
                            <Tags tags={OTHER} />
                        </article>
                    </section>
                </div>
            </Modal>
        </>
    );
};

export default About;