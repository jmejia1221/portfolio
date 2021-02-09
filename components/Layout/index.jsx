import React from 'react';
import Head from 'next/head';

// Components
import Header from '../Header';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';
import '@fortawesome/fontawesome-svg-core/styles.css';

// CSS
import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>John Mejia</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <Header>
                <Nav>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/projects">Projects</NavItem>
                    {/* <NavItem href="/blog">Blog</NavItem> */}
                    <NavItem href="/contact">Contact</NavItem>
                </Nav>
            </Header>
            {props.children}
        </div>
    );
};

export default Layout;