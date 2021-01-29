import React from 'react';

// Components
import SocialLinks from '@/components/Nav/SocialLinks';

// CSS
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Get in touch.</h1>
                </header>
                <section className={styles.main}>
                    <h3 className={styles.subtitle}>I'd love to hear from you!</h3>
                    <p className={styles.text}>
                    I believe in long-term partnerships to create scalable and lasting experiences.
                    </p>
                    <div className={styles.touch}>
                        <SocialLinks />
                        <span className={styles['touch__email']}>jmejiah.09@gmail.com</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;