import React, { useState } from 'react';

// Libs
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { 
    faAngular,
    faCss3Alt,
    faHtml5,
    faJsSquare,
    faReact,
    faSass,
    faVuejs,
    faWordpress,
    faGit,
    faLess
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Button from '../../components/UI/Button';
import Modal from '../../components/UI/Modal';
import Tags from '../../components/UI/Tags';

// CSS
import styles from './About.module.scss';

const languages = [
    {name: 'Javascript', value: 'javascript', icon: faJsSquare}
];

const markup_cascade = [
    {name: 'HTML', value: 'html', icon: faHtml5},
    {name: 'CSS', value: 'css', icon: faCss3Alt}
];

const frameworks = [
    {name: 'Angularjs', value: 'angularjs', icon: faAngular},
    {name: 'Reactjs', value: 'reactjs', icon: faReact},
    {name: 'Vuejs', value: 'vuejs', icon: faVuejs},
    {name: 'jQuery', value: 'jquery'}
];

const design_tools = [
    {name: 'Illustrator', value: 'illustrator'},
    {name: 'Adobe XD', value: 'xd'}
];

const other = [
    {name: 'Wordpress', value: 'wordpress', icon: faWordpress},
    {name: 'Git', value: 'git', icon: faGit},
    {name: 'Sass', value: 'sass', icon: faSass},
    {name: 'Less', value: 'less', icon: faLess},
    {name: 'BEM', value: 'bem'},
    {name: 'Firebase', value: 'firebase'}
];

const About = () => {
    const [showModal, setShowModal] = useState(false);

    const modalHandler = () => {
        setShowModal(!showModal);
    };

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>About Me</h1>
            <article className={styles.article}>
                <p className={styles.text}>Professionally connected with the web development industry and information
                technology for over 8 years. I've been working at Anomali inc.
                <a className={styles.link} target="_blank" href="https://www.anomali.com/">anomali.com</a> for last 5 years.</p>
                <p className={styles.text}>Well-organised person, problem solver with high attention to detail.
                Seeking challenges to create easy-to-navigate websites, create them from scratch or
                redesign and build them in web development technologies.</p>
                <p className={styles.text}><strong>I'm always up for new challenges, where I can collaborate with people and companies to
                get their product ideas rolling.</strong></p>
                <p className={styles.text}>Feel free to check <a className={styles.link} target="_blank" href="">my resume</a>.</p>
            </article>
            <div className={styles.skillsAction}>
                <Button clicked={modalHandler}>
                    Skills & Expertise
                    <FontAwesomeIcon className={styles.arrowIcon} icon={faChevronRight} />
                </Button>
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
                            <Tags tags={languages} />
                            <h4 className={styles['article__subtitle']}>
                                - Markup & Cascade languages
                            </h4>
                            <Tags tags={markup_cascade} />
                            <h4 className={styles['article__subtitle']}>
                                - Frameworks
                            </h4>
                            <Tags tags={frameworks} />
                            <h4 className={styles['article__subtitle']}>
                                - Design Tools
                            </h4>
                            <Tags tags={design_tools} />
                            <h4 className={styles['article__subtitle']}>
                                - Others
                            </h4>
                            <Tags tags={other} />
                        </article>
                    </section>
                </div>
            </Modal>
        </div>
    );
};

export default About;