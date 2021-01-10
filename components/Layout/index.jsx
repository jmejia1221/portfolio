import React from 'react';

// Components
import Header from '../Header';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';

// CSS
import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <div>
            <Header>
                <Nav>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/playground">Playground</NavItem>
                    <NavItem href="/blog">Blog</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </Nav>
            </Header>
            {props.children}
        </div>
    );
};

export default Layout;