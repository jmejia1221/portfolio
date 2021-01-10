import React from 'react';

// Components
import Header from '../components/Header';
import Nav from '../components/Nav';
import NavItem from '../components/Nav/NavItem';

const Home = () => {
    return (
        <div>
            <Header>
                <Nav>
                    <NavItem>About</NavItem>
                    <NavItem>Playground</NavItem>
                    <NavItem>Blog</NavItem>
                    <NavItem>Contact</NavItem>
                </Nav>
            </Header>
        </div>
    );
};

export default Home;