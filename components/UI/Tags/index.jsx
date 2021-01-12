import React from 'react';

// CSS
import styles from './Tags.module.scss';

const Tags = (props) => {
    let tags = null;

    if (props.tags && props.tags.length) {
        tags = props.tags.map((tag, i) => {
            return (
                <span key={i} className={styles.tag}>
                    {tag.name}
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