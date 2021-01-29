import React, { useState } from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from '../../config/axiosRequest';

// Components
import Cards from '@/components/Cards';
import Card from '@/components/Cards/Card';
import SlideUp from '@/components/UI/SlideUp';
import SlideInfo from '@/components/ProjectBuilder/SlideInfo';

// CSS
import styles from './Projects.module.scss';

export async function getStaticProps(context) {
    const res = await axios('api/projects/');
    const data = await res.data.data;
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        }
    }
}

const Projects = ({ data }) => {
    const [showSlideUp, setShowSlideUp] = useState(false);
    const [projectId, setProjectId] = useState([]);

    let slideContent = null;
    const slideUpHandler = (id) => {
        setShowSlideUp(!showSlideUp);

        if (!showSlideUp) {
            const newProjectId = data.filter(project => {
                return project.id === id;
            });
            setProjectId(newProjectId);
        }
    }

    if (projectId && projectId.length) {
        slideContent = (
            <SlideInfo
                key={projectId[0].id}
                project={projectId[0]} />
        );
    }

    let renderCard = null;
    if (data.length) {
        renderCard = data.map(card => {
            return (
                <Card key={card.id} color={card.key}>
                    <div onClick={() => slideUpHandler(card.id)} className={styles['work-content']}>
                        <h1 className={styles['work__title']}>
                            {card.name}
                        </h1>
                        <span className={styles['work__view']}>
                            View
                            <FontAwesomeIcon
                                className={styles['work__icon']}
                                icon={faLongArrowAltRight} />
                        </span>
                    </div>
                </Card>
            )
        });
    }

    return (
        <div className={styles.content}>
            <header>
                <h1 className={styles.title}>Projects</h1>
            </header>
            <section className={styles.work}>
                <Cards>
                    {renderCard}
                </Cards>
            </section>
            <SlideUp closeSlide={slideUpHandler} isShowSlide={showSlideUp}>
                {slideContent}
            </SlideUp>
        </div>
    );
};

export default Projects;