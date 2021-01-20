import React from 'react';

// CSS
import styles from './Blog.module.scss';

const Blog = () => {
    return (
        <div className={styles.content}>
            <header>
                <h1 className={styles.title}>Blog</h1>
            </header>
            <section className={styles.info}>
                <p>I occasionally share what I'm learning or thinking about (or cool things I find on the internet).</p>
            </section>
        </div>
    );
};

export default Blog;