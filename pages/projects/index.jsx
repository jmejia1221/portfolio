import React, { useEffect, useState } from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from '../../config/axiosRequest';

// Components
import Cards from '../../components/Cards';
import Card from '../../components/Cards/Card';
import SlideUp from '../../components/UI/SlideUp';

// CSS
import styles from './Playground.module.scss';

const Playground = () => {
    const [showSlideUp, setShowSlideUp] = useState(false);
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        axios('api/projects/')
            .then(response => {
                setProjectsData(response.data.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const slideUpHandler = () => {
        setShowSlideUp(!showSlideUp);
    }

    let renderCard = null;
    if (projectsData.length) {
        renderCard = projectsData.map(card => {
            return (
                <Card key={card.id}>
                    <div className={styles['work-content']}>
                        <h1 className={styles['work__title']}>
                            {card.name}
                        </h1>
                        <span onClick={slideUpHandler} className={styles['work__view']}>
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

            </SlideUp>
        </div>
    );
};

export default Playground;