import React from 'react';
import Image from 'next/image';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import Tags from '../../UI/Tags';

// CSS
import styles from './SlideInfo.module.scss';

const SlideInfo = (props) => {
    let imagesRendering = null;
    let tagsRendering = null;

    if (props.project.images && props.project.images.length) {
        imagesRendering = props.project.images.map(image => {
            return (
                <div
                    key={image}
                    className={styles.imageContent}>
                    <Image
                        src={`/${image}`}
                        alt="me"
                        layout="responsive"
                        width="auto"
                        height="auto" />
                </div>
            ); 
        })
    }

    if (props.project.tags && props.project.tags.length) {
        tagsRendering = <Tags tags={props.project.tags} />;
    }

    return (
        <div className={styles.content}>
            <header>
                <h2 className={styles.title}>{props.project.name}</h2>
            </header>
            <section className={styles.info}>
                <div className={styles.tags}>
                    <h3 className={styles['tags__title']}>Skills Used</h3>
                    {tagsRendering}
                </div>
                { props.project.link && (
                    <div className={styles.link}>
                        <a
                            target="_blank"
                            href={props.project.link}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faExternalLinkAlt} />
                            Visit
                        </a>
                    </div>
                ) }
                {imagesRendering}
            </section>
        </div>
    );
};

export default SlideInfo;