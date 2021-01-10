import React from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// CSS
import styles from './SocialLinks.module.scss';

const SocialLinks = () => {
    return (
        <ul className={styles.icons}>
            <li>
                <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
                <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
                <FontAwesomeIcon icon={faDribbble} />
            </li>
            <li>
                <FontAwesomeIcon icon={faCodepen} />
            </li>
        </ul>
    );
};

export default SocialLinks;