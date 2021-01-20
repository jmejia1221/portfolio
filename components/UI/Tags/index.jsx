import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// CSS
import styles from './Tags.module.scss';

const Tags = (props) => {
    let tags = null;

    if (props.tags && props.tags.length) {
        tags = props.tags.map((tag, i) => {
            return (
                <span key={i} className={styles.tag}>
                    { tag.icon &&
                        <FontAwesomeIcon className={styles.icon} icon={tag.icon} /> }
                    {tag.name ? tag.name : tag}
                </span>
            )
        });
    }

    return (
        <>
            {tags}
        </>
    );
};

export default Tags;