import React from 'react';
import { StyledNavbar, NavItemLink } from './style';

function Navbar({ children }) {
    return(
        <StyledNavbar>
            <NavItemLink to="/Login">Log in</NavItemLink>
            <NavItemLink to="/Signup">Sign up</NavItemLink>
        </StyledNavbar>
    );
}

export default Navbar;