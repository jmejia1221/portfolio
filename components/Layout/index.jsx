import React from 'react';

// Components
import Header from '../Header';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';

const Layout = (props) => {
    return (
        <div>
            <Header>
                <Nav>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem>Playground</NavItem>
                    <NavItem>Blog</NavItem>
                    <NavItem>Contact</NavItem>
                </Nav>
            </Header>
            {props.children}
        </div>
    );
};

export default Layout;