import React from 'react';
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <h2> Cat Tinder!</h2>
            <header>
                <Nav>
                    <NavItem>
                        <NavLink to="/">
                            <h6> Home </h6>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/catindex">
                            <h6>Let's take a look!</h6>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/catnew">
                            <h6>Start today!</h6>
                        </NavLink>
                    </NavItem>
                </Nav>
            </header>
        </>
    )
}

export default Header;
