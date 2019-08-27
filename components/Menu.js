import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const Menu = () => {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            &nbsp;
            <Link href="/about">
                <a>About</a>
            </Link>
            &nbsp;
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    );
};

export default Menu;